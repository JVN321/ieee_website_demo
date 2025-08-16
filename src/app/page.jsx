"use client";

import Topbar from "./components/Topbar";
import ExpandIcon from "./components/Expand";
import Section from "./components/Section";
import Landing from "./components/sections/Landing";
import Home from "./components/sections/Home";
import Events from "./components/sections/Events";
import Awards from "./components/sections/Awards";
import Excom from "./components/sections/Excom";
import Essentials from "./components/sections/Essentials";
import Bottombar from "./components/Bottombar";

export default function Main() {
    return (
        <div className="scroll-smooth relative">
            <main>
                <Section id="home" title="Home">
                    <Home />
                </Section>

                <Section id="events" title="Events">
                    <Events />
                </Section>

                <Section id="awards" title="Awards">
                    <Awards />
                </Section>

                <Section id="excom" title="Excom">
                    <Excom />
                </Section>

                <Section id="essentials" title="Essentials">
                    <Essentials />
                </Section>
                <Bottombar />
            </main>
        </div>
    );
}
