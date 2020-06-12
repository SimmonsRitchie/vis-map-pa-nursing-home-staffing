import React from "react";
import TooltipWrapper from "./TooltipWrapper";
import { titleCase} from '../../utils/formatters'

const MapTooltip = ({ properties }) => {

  const tooltipData = [
    {label: "Staffing hours", accessor: "total_hprd" }, 
    {label: "Resident cases", accessor: "resident_cases" }, 
    {label: "Resident deaths", accessor: "resident_deaths" }, 
  ]
  const {name, city} = properties
  const cleanCity = titleCase(city)
  return (
    <TooltipWrapper label={properties.name} subLabel={`${cleanCity}, PA`}>
      <FlexGrid>
        {tooltipData.map(row => {
          const value = properties[row.accessor]
          let cleanVal
          if (typeof value === 'number' && !Number.isSafeInteger(value)) {
            cleanVal = value.toFixed(1)
          } else if (value === '*') {
            cleanVal = 'Less than 5'
          } else if ( !value) {
            cleanVal = 0
          } else if ( value.toLowerCase() === 'no data') {
            cleanVal = 0
          } else {
            cleanVal = titleCase(value)
          }
          return (
            <FlexRow key={row.label} label={row.label} value={cleanVal}/>
          )
        })}
      </FlexGrid>
    </TooltipWrapper>
  );
};

const FlexGrid = ({ children }) => {
  return <div className="leaflet-map-tooltip__flex-grid">{children}</div>;
};

const FlexRow = ({ label, value }) => {
  return (
    <div className="leaflet-map-tooltip__flex-grid-row">
      <FlexCell>{label}:</FlexCell>
      <FlexCell>{value}</FlexCell>
    </div>
  );
};

const FlexCell = ({ children }) => {
  return <div className="leaflet-map-tooltip__flex-grid-cell">{children}</div>;
};

export default MapTooltip;
