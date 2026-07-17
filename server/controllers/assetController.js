import Asset from "../models/Asset.js";

/**
 * @desc    Create Asset
 * @route   POST /api/assets
 * @access  Admin
 */
export const createAsset = async (req, res) => {
  try {
    const { name, type, unit, description } = req.body;

    const existingAsset = await Asset.findOne({
      name: name.trim(),
    });

    if (existingAsset) {
      return res.status(409).json({
        success: false,
        message: "Asset already exists.",
      });
    }

    const asset = await Asset.create({
      name,
      type,
      unit,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Asset created successfully.",
      data: asset,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Get All Assets
 * @route   GET /api/assets
 * @access  Private
 */
export const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: assets.length,
      data: assets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Get Asset By ID
 * @route   GET /api/assets/:id
 * @access  Private
 */
export const getAssetById = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: asset,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Update Asset
 * @route   PUT /api/assets/:id
 * @access  Admin
 */
export const updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Asset updated successfully.",
      data: asset,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Delete Asset
 * @route   DELETE /api/assets/:id
 * @access  Admin
 */
export const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found.",
      });
    }

    await asset.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Asset deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};