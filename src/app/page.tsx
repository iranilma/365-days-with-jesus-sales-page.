import React from "react";
import { SAMPLE_DAY_1_DEVOTIONAL } from "@/lib/sample-devotional";
import { SalesPageContent } from "@/components/sales/SalesPageContent";

export default function StandaloneSalesPage() {
  return <SalesPageContent sampleEntry={SAMPLE_DAY_1_DEVOTIONAL} />;
}
