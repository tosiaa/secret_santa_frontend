import React from "react";

import "./Accordion.css";
export default class Accordion extends React.Component {
  state = { openedTab: null };

  toggleTab = i => {
    let newTab = null;
    if (this.state.openedTab !== i) {
      newTab = i;
    }
    this.setState({ openedTab: newTab });
  };

  renderTab = ({ title, text }, i) => {
    const { openedTab } = this.state;
    const contentClassName = `Accordion-content Accordion-content--${
      i === openedTab ? "open" : "closed"
    }`;
    const buttonClassName = "Accordion-button";

    return (
      <div className="Accordion-section" key={`AccordionSection${i}`}>
        <button className={buttonClassName} onClick={() => this.toggleTab(i)}>
          {title}
        </button>
        <div className={contentClassName}>{text}</div>
      </div>
    );
  };

  render() {
    const tabs = this.props.tabs || [];
    return <div className="Accordion">{tabs.map(this.renderTab)}</div>;
  }
}
