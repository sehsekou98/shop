import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10
        container"
        sx={{ bgcolor: "black", color: "white", py: 3 }} >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
          {" "}
          Company
          {" "}
          </Typography>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
          About{" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
           Blog {" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            Press{" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            Jobs{" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            Partners{" "}
          </Button>
          </div>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Soluctions
            {" "}
          </Typography>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            Marketing
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
            {" "}
           Analytics
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            Commerce
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            Support{" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            Insights
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            Supports
          </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
          {" "}
            Company
            {" "}
          </Typography>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            ABOUT
            {" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            BLOG
            {" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            PRESS
            {" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            JOBS
            {" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            PARTNERS
            {" "}
          </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
          {" "}
            Company
            {" "}
          </Typography>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            ABOUT
            {" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            BLOG{" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            PRESS{" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            JOBS{" "}
          </Button>
          </div>
          <div>
          <Button className="pb-5" variant="h6">
          {" "}
            PARTNERS{" "}
          </Button>
          </div>
        </Grid>
        
        
      </Grid>
    </div>
    
  );
};

export default Footer;
