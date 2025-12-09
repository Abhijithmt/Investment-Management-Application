const User = require("../model/user");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendmail");
const user = require("../model/user")

exports.createadmin = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields required" });
    }

    const alreadyexist = await User.findOne({ email });
    if (alreadyexist) {
      return res.status(400).json({ message: "Admin already exist" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    // SEND EMAIL FIRST
    try {
      await sendEmail({
        to: email,
        subject: "Welcome Admin",
        message: `Hi ${name},
Your admin account is created.
Email: ${email}
Password: ${password}`
      });
    } catch (emailError) {
      return res.status(500).json({
        message: "Email sending failed",
        error: emailError.message
      });
    }

    // SAVE ADMIN ONLY IF EMAIL SUCCESS
    const newUser = await User.create({
      name,
      email,
      password: hashpassword,
      phone,
      role:  "admin"
    });

    return res.status(201).json({
      message: "Admin registered successfully & email sent",
      admin: newUser
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

