"use client";

import { useBalance } from "@repo/store/balance";

export default function() {
  const balance = useBalance();
  return <div>
    this is the merchant page. and the digit here is from recoil {balance}
  </div>
}