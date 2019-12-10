import React from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import './grid-styles.css'
import './resizable-styles.css'
import _ from "lodash";
import AddFeed from './AddFeed'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faArrowsAlt} from "@fortawesome/free-solid-svg-icons";
import Reddit from "../api-feeds/reddit/Reddit";
import Twitter from "../api-feeds/twitter/Twitter";
import Youtube from "../api-feeds/youtube/Youtube";
import Instagram from "../api-feeds/Instagram";

const ResponsiveGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};
const originalItems = getFromLS("items") || [];
const originalNewCounter = getFromLS("newCount") + 1 || 0;

export default class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            layouts: JSON.parse(JSON.stringify(originalLayouts)),
            items: JSON.parse(JSON.stringify(originalItems)),
            newCounter: originalNewCounter
        };

        this.onAddItem = this.onAddItem.bind(this);
    }

    onLayoutChange(layout, layouts) {
        saveToLS("layouts", layouts);
        this.setState({layouts});
    }

    onRemoveItem(i) {
        console.log("removing", i);
        this.setState({items: _.reject(this.state.items, {i: i})},
            () => saveToLS("items", this.state.items));
    }

    onAddItem(name) {
        /*eslint no-console: 0*/
        console.log("adding", "n" + this.state.newCounter);
        this.setState({
                // Add a new item. It must have a unique key!
                items: this.state.items.concat({
                    i: name + this.state.newCounter,
                    x: (this.state.items.length * 2) % (this.state.cols || 6),
                    y: 0, // puts it at the bottom
                    w: 3,
                    h: 3,
                    minW: 3,
                    minH: 3,
                    type: name
                }),
                // Increment the counter to ensure key is always unique.
                newCounter: this.state.newCounter + 1
            },
            () =>
                saveToLS("items", this.state.items),
            saveToLS("newCount", this.state.newCounter));
    }

    createElement(el) {
        const i = el.i;
        return (
            <div key={i} data-grid={el}>
                <span
                    className="remove"
                    onClick={this.onRemoveItem.bind(this, i)}
                ><FontAwesomeIcon icon={faTrashAlt}/></span>
                <span
                    className="drag-handle"
                ><FontAwesomeIcon icon={faArrowsAlt}/></span>
                    {el.type === 'Twitter' ? (
                        <Twitter/>
                    ) : el.type === 'Youtube' ? (
                        <Youtube/>
                    ) : el.type === 'Instagram' ? (
                        <Instagram/>
                    ) : el.type === 'Reddit' ? (
                        <Reddit/>
                    ) : 'No feed.'
                    }
            </div>
        );
    }

    render() {
        return (
            <div>
                <AddFeed onAddItem={this.onAddItem}/>

                <ResponsiveGridLayout
                    className="layout"
                    layouts={this.state.layouts}
                    // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 12, md: 8, sm: 6, xs: 4, xxs: 3}}
                    onLayoutChange={(layout, layouts) =>
                        this.onLayoutChange(layout, layouts)
                    }
                    draggableHandle=".drag-handle">
                    {_.map(this.state.items, el => this.createElement(el))}

                </ResponsiveGridLayout>
            </div>
        )
    }
};

function getFromLS(key) {
    let ls = {};
    if (localStorage) {
        try {
            ls = JSON.parse(localStorage.getItem(key)) || {};
        } catch (e) {
            console.log(e);
        }
    }
    return ls[key];
}

function saveToLS(key, value) {
    if (localStorage) {
        localStorage.setItem(
            key,
            JSON.stringify({
                [key]: value
            })
        );
    }
}