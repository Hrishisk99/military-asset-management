import Base from "../models/Base.js";

// Create Base
export const createBase = async (req, res) => {
  try {
    const { name, location } = req.body;

    const existingBase = await Base.findOne({ name });

    if (existingBase) {
      return res.status(409).json({
        success: false,
        message: "Base already exists.",
      });
    }

    const base = await Base.create({
      name,
      location,
    });

    res.status(201).json({
      success: true,
      message: "Base created successfully.",
      data: base,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Bases
export const getAllBases = async (req, res) => {
  try {
    const bases = await Base.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: bases,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Base By Id
export const getBaseById = async (req, res) => {
  try {
    const base = await Base.findById(req.params.id);

    if (!base) {
      return res.status(404).json({
        success: false,
        message: "Base not found.",
      });
    }

    res.json({
      success: true,
      data: base,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Base
export const updateBase = async (req, res) => {
  try {
    const base = await Base.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!base) {
      return res.status(404).json({
        success: false,
        message: "Base not found.",
      });
    }

    res.json({
      success: true,
      message: "Base updated successfully.",
      data: base,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Base
export const deleteBase = async (req, res) => {
  try {
    const base = await Base.findByIdAndDelete(req.params.id);

    if (!base) {
      return res.status(404).json({
        success: false,
        message: "Base not found.",
      });
    }

    res.json({
      success: true,
      message: "Base deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};