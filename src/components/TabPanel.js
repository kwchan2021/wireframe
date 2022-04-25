import TabButton from "./TabButton";

const TabPanel = ({ onActiveTabChange }) => {
    return (
        <header className="tab-panel">
            <TabButton name="Alarms" tabName="Alarms" onActiveTabChange={onActiveTabChange}/>
            <TabButton name="Node type" tabName="Node type" onActiveTabChange={onActiveTabChange}/>
            <TabButton name="Critical" tabName="CRITICAL" onActiveTabChange={onActiveTabChange}/>
            <TabButton name="Major" tabName="MAJOR" onActiveTabChange={onActiveTabChange}/>
            <TabButton name="Minor" tabName="MINOR" onActiveTabChange={onActiveTabChange}/>
        </header>
    )
}
export default TabPanel