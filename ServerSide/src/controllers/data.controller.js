const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");
const dataService = require("../services/data.service");

const getCustomerType = async (req, res) => {
  try {
    const result = await dataService.viewCustomerType();
    return response.handleSuccessResponse(
      {
        successCode: StatusCode.SUCCESS_CODE,
        result,
      },
      res,
      "Customer Type list fetched successfully.",
      "Customer Type retrieved successfully."
    );
  } catch (error) {
    if (error.errorCode) {
      return response.handleErrorResponse(error, res);
    }
    return response.handleErrorResponse(
      {
        errorCode: StatusCode.SERVER_ERROR,
        message: "Internal Server Error",
        error,
      },
      res
    );
  }
};

const getAccountIndustry = async (req, res) => {
  try {
    const result = await dataService.viewAccountIndustry();
    return response.handleSuccessResponse(
      {
        successCode: StatusCode.SUCCESS_CODE,
        result,
      },
      res,
      "Account Industry list fetched successfully.",
      "Account Industry retrieved successfully."
    );
  } catch (error) {
    if (error.errorCode) {
      return response.handleErrorResponse(error, res);
    }
    return response.handleErrorResponse(
      {
        errorCode: StatusCode.SERVER_ERROR,
        message: "Internal Server Error",
        error,
      },
      res
    );
  }
};

const getTeam = async (req, res) => {
  try {
    const result = await dataService.viewTeam();
    return response.handleSuccessResponse(
      {
        successCode: StatusCode.SUCCESS_CODE,
        result,
      },
      res,
      "Team list fetched successfully.",
      "Team retrieved successfully."
    );
  } catch (error) {
    if (error.errorCode) {
      return response.handleErrorResponse(error, res);
    }
    return response.handleErrorResponse(
      {
        errorCode: StatusCode.SERVER_ERROR,
        message: "Internal Server Error",
        error,
      },
      res
    );
  }
};

const getACVRange = async (req, res) => {
  try {
    const result = await dataService.viewACVRange();
    return response.handleSuccessResponse(
      {
        successCode: StatusCode.SUCCESS_CODE,
        result,
      },
      res,
      "ACV Range list fetched successfully.",
      "ACV Range retrieved successfully."
    );
  } catch (error) {
    if (error.errorCode) {
      return response.handleErrorResponse(error, res);
    }
    return response.handleErrorResponse(
      {
        errorCode: StatusCode.SERVER_ERROR,
        message: "Internal Server Error",
        error,
      },
      res
    );
  }
};

module.exports = {
  getCustomerType,
  getAccountIndustry,
  getTeam,
  getACVRange,
};
