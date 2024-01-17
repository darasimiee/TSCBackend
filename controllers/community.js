import Community from "../models/community.js";
import { customError } from "../config/error.js";
import data from "../community.js";

export const inputCommGroupToDB = async(req, res) =>
{
  await Community.deleteMany({})
  const community = await Community.insertMany(data.community)
  res.status(200).json(community)
}

export const getAllCommuninities = async(req, res) =>
{
  try
  {
    const allCommunities = await Community.find()
    res.status(200).json(allCommunities)
  } catch (error) 
  {
    res.status(400).json(error)
  }
}