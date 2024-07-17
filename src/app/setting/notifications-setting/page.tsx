"use client";

import React, { useState } from "react";
import Loading from "@/app/Loading";

const Page = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading />;
  }
};

export default Page;
