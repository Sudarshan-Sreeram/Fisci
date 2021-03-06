import * as React from "react";
import {
  AnimatedPieChart,
  CategoryBreakdownPieChart,
} from "./insights/pieChart";
import { SpendingOverTimeLineChart } from "./insights/lineChart";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { CategoryMonthlyBarChart } from "./insights/barGraph";

type Props = {};

export function InsightsPage(props: Props) {
  return (
    <div>
      <h1 style={{ marginBottom: 4 }}>Insights</h1>
      <Divider />
      <p style={{ fontSize: 16 }}>
        View patterns in your spending history to see where you can save
      </p>{" "}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CategoryBreakdownPieChart />
        </Grid>
        <Grid item xs={6}>
          <AnimatedPieChart />
        </Grid>
        <Grid item xs={12}>
          <SpendingOverTimeLineChart />
        </Grid>
        <Grid item xs={12}>
          <CategoryMonthlyBarChart />
        </Grid>
      </Grid>
    </div>
  );
}
