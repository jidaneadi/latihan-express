const { User } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
const enkrip = require('bcrypt')
const Create = async (req, res) => {
  const schema = {
    username: "string | empty=false",
    email: "email | empty=false",
    pass: "string | min=8",
    konf_pass: "string | min=8",
  };

  const validasi = v.validate(req.body, schema);
  if (validasi.length) {
    return res.status(400).json({ msg: validasi });
  }

  if (req.body.email === "") {
    return res.status(400).json({ msg: "Email tidak boleh kosong!" });
  }
  if (req.body.username === "") {
    return res.status(400).json({ msg: "Username tidak boleh kosong!" });
  }
  if (req.body.pass === "" || req.body.konf_pass === "") {
    return res
      .status(400)
      .json({ msg: "Password atau konfirmasi password tidak boleh kosong!" });
  }
  if (req.body.pass != req.body.konf_pass) {
    return res
      .status(400)
      .json({ msg: "Password dan konfirmasi password harus sama!" });
  }

  const newpass = await enkrip.hash(req.body.pass, 10)
  const newkonfpass = await enkrip.hash(req.body.konf_pass, 10)
  const newData = {
    username: req.body.username,
    email: req.body.email,
    pass: newpass,
    konf_pass: newkonfpass,
  };

  await User.create(newData);

  return res.json({ msg: "Tambah data berhasil" });
};

module.exports = { Create };
