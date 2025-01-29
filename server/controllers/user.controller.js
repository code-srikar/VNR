import mongoose from "mongoose";
import Product from "../models/form.model.js";

const createUsers = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    if (!name || !email || !password || !confirmpassword) {
        return res.status(400).json({ message: "Please enter all the fields" });
    }
    const newproduct = new Product({ name, email, password, confirmpassword });
    try {
        const existed = await Product.findOne({ email });
        if (existed) {
            res.status(400).json({ success: false, message: "The User Already Exists" });
            console.log("User Already Exists");
        } else {
            await newproduct.save();
            res.status(200).json({ message: "New User has Created" });
        }
    }
    catch (err) {
        res.sendStatus(400).json({ message: "Error in creating the user" });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const del = await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Record deleted Successfully" });
    } catch (err) {
        res.status(404).json({ message: "There was an error in deleting the record" });
    }
}
const getUsers = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await Product.findOne({ email });
        if (user) {
            const { name, email, password, confirmpassword } = await Product.findOne({ email });
            if (userpassword == password) {
                res.status(200).json({ success: true, message: "User Login is Successful" });
            }
        } else {
            res.status(400).json({ success: false, message: "User with Specified Credentials doesnot Exist" });
        }
    } catch (err) {
        res.status(400), json({ success: false, message: "There was an error in login" });
    }
}
// const getUsers = async (req, res) => {
//     try {
//         const records = await Product.find({});
//         res.status(200).json({ records })
//     } catch (err) {
//         res.status(404).json({ message: "There was an error in retreiving records" });
//     }
// }
const updateUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const existed = await Product.findOne({ email });
        if (existed) {
            res.status(400).json({ success: false, message: "The User Already Exists" });
            console.log("User Already Exists");
        } else {
            const up = await Product.findByIdAndUpdate(id, data);
            res.status(200).json({ success: true, message: "Record Updated Successfully", data: data });
        }
    } catch (err) {
        res.status(404).json({ success: false, message: "There was an error in updating the Records" });
    }
}
export { getUsers, createUsers, deleteUser, updateUser };