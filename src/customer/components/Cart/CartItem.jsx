import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="P-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://s.alicdn.com/@sc04/kf/H9f956800794c4005b275f5020d6f0beaY.png_250x250.png"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70">Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: Sekou Fashions</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">MAD 200</p>
            <p className="opacity-50 line-through">MAD 250</p>
            <p className="text-green-600 font-semibold">10% off</p>
          </div>
        </div>
        
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton>
                    <RemoveCircleOutline />
                </IconButton>
                <span className="py-1 px-7 border rounded">
                    <IconButton>
                        <AddCircleOutline />
                    </IconButton>
                 </span>
            </div>
            <div>
                <Button>remove</Button>
            </div>
        </div>
    </div>
  );
};

export default CartItem;
