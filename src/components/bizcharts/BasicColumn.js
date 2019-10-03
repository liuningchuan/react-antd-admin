import React, { Component } from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip
} from "bizcharts";

class BasicColumn extends Component {
  render() {

    const cols = {
      sales: {
        tickInterval: 20
      }
    };
    return (
      <div>
        <Chart height={400} data={this.props.data} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="year*sales" />
        </Chart>
      </div>
    );
  }
}

export default BasicColumn;
