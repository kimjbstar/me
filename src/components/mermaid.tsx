import React, { useEffect, useState } from "react"
import mermaid, { MermaidConfig } from "mermaid"

interface Props {
  name?: any
  chart: any
  config?: MermaidConfig
}

const DEFAULT_CONFIG: MermaidConfig = {
  startOnLoad: true,
  theme: "forest",
  // logLevel: "fatal",
  securityLevel: "strict",
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    curve: "linear",
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false,
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    // fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
  },
}

export default function Mermaid(props: React.PropsWithChildren<Props>) {
  const [chart, setChart] = useState(null)

  useEffect(() => {
    setChart(props.chart)
    mermaid.initialize({ ...DEFAULT_CONFIG, ...props.config })
    mermaid.contentLoaded()
  }, [chart])

  if (!chart) return <></>
  return <div className="mermaid">{chart}</div>
}
