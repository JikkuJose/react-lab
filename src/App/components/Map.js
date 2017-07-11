import React from 'react'
import MindMap from 'react-mindmap';
import { nodes, connections } from '../../data/sampleMap.js';

export function Map() {
  return(
    <MindMap nodes={nodes} connections={connections} />
  );
}
