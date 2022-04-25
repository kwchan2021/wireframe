import React, { useMemo, useCallback } from "react";

// The parameter should be a 
const severityMap = {
    "CRITICAL": "Severity critcal",
    "MAJOR": "Severity major",
    "MINOR": "Severity minor"
}

const Table = ({items,  activeTab, checkedBoxes, onCheckboxChange}) => {

    const itemsWithUniqueKey = useMemo(() => {
      return items.map((datum, index) => {
        return ({ uuid: index, ...datum });
      });
    }, [items]);

    // Handle Tab shown
    const rows = useMemo(() => {   
        if (activeTab === "Alarms"){
            return itemsWithUniqueKey
        }
        else if (activeTab === "Node type"){
            return [...itemsWithUniqueKey].sort((a, b) => (a["node-type"].localeCompare(b["node-type"])))
        }
        else{
            return itemsWithUniqueKey.filter((item) => item["condition-severity"] === activeTab)
        }
    }, [activeTab, itemsWithUniqueKey])

    // Handle styling
    const getRowClassName = useCallback((severity) => {
        if (activeTab === "Alarms" || activeTab === "Node type"){
            return severityMap[severity]
        }
        return "filter-tab"
    }, [activeTab])

    return (
        <div>
            <table className="tab">
                <thead>
                    <tr className="tab-heading">
                        <th></th>
                        <th>Severity</th>
                        <th>Description</th>
                        <th>Node type</th>
                        <th>Clearable</th>
                        <th>State</th>
                        <th>Raise time</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row) => 
                        <tr className={getRowClassName(row["condition-severity"])} key={row["uuid"]}>
                            <td>
                                <input type="checkbox" onChange={(e) => {onCheckboxChange(row['uuid']);}} checked={checkedBoxes.has(row["uuid"])}></input>
                            </td>
                            <td>{row["condition-severity"]}</td>
                            <td>{row["additional-text"]}</td>
                            <td>{row["node-type"]}</td>
                            <td>{row["manual-clearable"]? "NO" : "YES"}</td>
                            <td>{row["state"]}</td>
                            <td>{row["last-raise-time"]}</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    )
}

export default Table;