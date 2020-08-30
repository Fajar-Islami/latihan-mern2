const express = require("express");
const User = require("../models/user");

const index = async (req, res) => {
  try {
    const dataUser = await User.find();
    res.status(200).send({ status: 200, message: "Sukses", data: dataUser });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

// Create
const create = async (req, res) => {
  try {
    const dataUser = await User({
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      alamat: req.body.alamat,
    });

    dataUser.save();
    res.status(200).send({ status: 200, message: "user berhasil ditambahkan", data: dataUser });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

// GET Detail
const detail = async (req, res) => {
  try {
    const dataUser = await User.findONe({ _id: req.params.id });

    res.status(200).send({ status: 200, message: "sukses", data: dataUser });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

// Delete
const destroy = async (req, res) => {
  try {
    const dataUser = await User.findByIdAndRemove({ _id: req.params.id });
    if (!dataUser) {
      res.status(200).send({ status: 200, message: "Data tidak ditemukan" });
    }

    res.status(200).send({ status: 200, message: "Data data berhasil dihapus" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { index, create, detail, destroy };
