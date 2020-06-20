/* eslint "no-console": "off" */

const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const landingPage = path.resolve("./src/templates/landing.jsx");

  // Load the landing page
  createPage({
    path: `/`,
    component: landingPage,
  });
};
