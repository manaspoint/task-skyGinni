const dataModel = require("../models/data.model");

const viewCustomerType = async () => {
  try {
    const result = await dataModel.readJSON("customer Type.json");
    return result;
  } catch (error) {
    throw error;
  }
};

const viewAccountIndustry = async () => {
  try {
    const result = await dataModel.readJSON("account Industry.json");
    return result;
  } catch (error) {
    throw error;
  }
};

const viewTeam = async () => {
  try {
    const result = await dataModel.readJSON("team.json");
    return result;
  } catch (error) {
    throw error;
  }
};

const viewACVRange = async () => {
  try {
    const result = await dataModel.readJSON("acv Range.json");
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  viewCustomerType,
  viewAccountIndustry,
  viewTeam,
  viewACVRange,
};
