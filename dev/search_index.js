var documenterSearchIndex = {"docs":
[{"location":"man/arrows/#Arrows","page":"→ Arrows ←","title":"→ Arrows ←","text":"","category":"section"},{"location":"man/arrows/","page":"→ Arrows ←","title":"→ Arrows ←","text":"A key part of StenoGraphs.jl are the arrows.","category":"page"},{"location":"#StenoGraphs.jl-―-A-concise-language-to-write-meta-graphs","page":"Home","title":"StenoGraphs.jl ― A concise language to write meta graphs","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: ) (Image: Build Status) (Image: Coverage)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Stenography: a quick way of writing using special signs or abbreviations","category":"page"},{"location":"","page":"Home","title":"Home","text":"StenoGraphs.jl lets you quickly write meta graphs. As with shorthand, it is optimized for writing quickly (by humans) but is less quickly read (by computers).","category":"page"},{"location":"","page":"Home","title":"Home","text":"To install StenoGraphs.jl:","category":"page"},{"location":"","page":"Home","title":"Home","text":"import Pkg; Pkg.add(\"StenoGraphs\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"Your first @StenoGraph using StenoGraphs:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using StenoGraphs\n@StenoGraph a → b","category":"page"},{"location":"#Multiple-Nodes","page":"Home","title":"Multiple Nodes","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Multiple nodes on one side lead to multiple edges:","category":"page"},{"location":"","page":"Home","title":"Home","text":"@StenoGraph [a b] → c","category":"page"},{"location":"","page":"Home","title":"Home","text":"There are two desirable outcomes for multible edges on both sides, either elementwise edges or cross product. The single line arrow (→) means element wise and double line arrow (⇒) means crossproduct (don't tell anyone but for a single node on one side → is converted to ⇒ for convinience).","category":"page"},{"location":"","page":"Home","title":"Home","text":"@StenoGraph [a b] → [c d]","category":"page"},{"location":"","page":"Home","title":"Home","text":"@StenoGraph [a b] ⇒ [c d]","category":"page"},{"location":"#Modification","page":"Home","title":"Modification","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modification is done by overloading * for types of Modifier.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Let's define a Modifier:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using StenoGraphs #hide\nstruct Weight <: EdgeModifier\n    w::Number\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"An  EdgeModifier can be directly applied to edges:","category":"page"},{"location":"","page":"Home","title":"Home","text":"@StenoGraph (a → b) * Weight(1)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Multiplying a Node with an EdgeModifier leads to a ModifyingNode.","category":"page"},{"location":"","page":"Home","title":"Home","text":":b * Weight(1)","category":"page"},{"location":"","page":"Home","title":"Home","text":"A ModifyingNode will modify its edges:","category":"page"},{"location":"","page":"Home","title":"Home","text":"@StenoGraph a → b * Weight(1)","category":"page"},{"location":"","page":"Home","title":"Home","text":"To modify Nodes directly with a NodeModifier to create a ModifiedNode (instead of ModifyingNode) we overload ^:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using StenoGraphs #hide\nstruct NodeLabel <: NodeModifier\n    l\nend\n\n@StenoGraph a → b^NodeLabel(\"Dickes B\")","category":"page"},{"location":"#Related-Software","page":"Home","title":"Related Software","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The R programming language has formulas of the form a ~ b to specify regressions. This inspired Yves Rosseel to create a very concise, yet expressive syntax for Structural Equation Models for lavaan. Stenographs.jl tries to maintain the best features of this syntax while creating Julia Objects that represent a graph (i.e., similar to MetaGraphs).","category":"page"},{"location":"man/types/#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"At the top of the type hierachy we have AbstractEdges and AbstractNodes. These are pretty abstract in the sense that they capture anything that might somehow be interpreted as an edge or node. More concrete (but still not concrete concrete) are Edge and Node.","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"AbstractNode\nAbstractEdge","category":"page"},{"location":"man/types/#StenoGraphs.AbstractNode","page":"Types","title":"StenoGraphs.AbstractNode","text":"AbstractNode\n\nAt the top of the type hierarchy of StenoGraphs. Anything that might resemble a node.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.AbstractEdge","page":"Types","title":"StenoGraphs.AbstractEdge","text":"AbstractEdge\n\nAt the top of the type hierarchy of StenoGraphs. Anything that might resemble an edge.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#Edge/Node","page":"Types","title":"Edge/Node","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"Edge and Node are still not concrete but have fields of reliable types to interface with.","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"StenoGraphs implements DirectedEdge and UndirectedEdge  as concrete subtypes of Edge as well as SimpleNode as concrete subtype of Node.","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"Node\nEdge","category":"page"},{"location":"man/types/#StenoGraphs.Node","page":"Types","title":"StenoGraphs.Node","text":"Node\n\nSubtype of AbstractNode. Any subtype of Node must have the field node (and no other) that uniquily identifies the node.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.Edge","page":"Types","title":"StenoGraphs.Edge","text":"Edge\n\nSubtype of AbstractEdge. Any subtype of Edge must have the fields src and dst (and no other), which must be a subtype of AbstractNode. Any implementation might be stricter about typing.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#SimpleNode/UndirectedEdge/DirectedEdge","page":"Types","title":"SimpleNode/UndirectedEdge/DirectedEdge","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"These are the concrete Node and Edge types implemented by StenoGraphs.","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"StenoGraphs.SimpleNode\nDirectedEdge\nUndirectedEdge","category":"page"},{"location":"man/types/#StenoGraphs.SimpleNode","page":"Types","title":"StenoGraphs.SimpleNode","text":"SimpleNode\n\nConstructs a subtype of Node with a symbol as identifier.\n\nExample\n\njulia> SimpleNode(:a)\na\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.DirectedEdge","page":"Types","title":"StenoGraphs.DirectedEdge","text":"DirectedEdge(src, dst)\n\nSubtype of Edge. Directed edge from src to dst.\n\nExample\n\njulia> DirectedEdge(:a, :b)\na → b\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.UndirectedEdge","page":"Types","title":"StenoGraphs.UndirectedEdge","text":"UndirectedEdge(src, dst)\n\nSubtype of Edge. Undirected edge from src to dst. What is what does not matter.\n\nExample\n\njulia> e1 = UndirectedEdge(:a, :b)\na ↔ b\n\njulia> e2 = UndirectedEdge(:b, :a)\nb ↔ a\n\njulia> isequal(e1, e2)\ntrue\n\njulia> unique([e1, e2])\na ↔ b\n\n\n\n\n\n","category":"type"},{"location":"man/types/#MetaEdge/MetaNode","page":"Types","title":"MetaEdge/MetaNode","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"These types store a node/edge alongside metadata.","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"MetaNode\nMetaEdge","category":"page"},{"location":"man/types/#StenoGraphs.MetaNode","page":"Types","title":"StenoGraphs.MetaNode","text":"MetaNode\n\nSubtype of AbstractNode. Any subtype of MetaNode must have a field node of subtype Node, but may have any number of other fields containing metadata.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.MetaEdge","page":"Types","title":"StenoGraphs.MetaEdge","text":"MetaEdge\n\nSubtype of AbstractEdge. Any subtype of MetaEdge must have a field edge of subtype Edge, but may have any number of other fields containing metadata.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#Modified-Nodes-and-Edges","page":"Types","title":"Modified Nodes and Edges","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"These concrete types store a node/edge alongside modifiers (either NodeModifiers or EdgeModifiers) as metadata.","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"ModifiedNode\nModifyingNode\nModifiedEdge","category":"page"},{"location":"man/types/#StenoGraphs.ModifiedNode","page":"Types","title":"StenoGraphs.ModifiedNode","text":"ModifiedNode\n\nSubtype of MetaNode that contains two fields (node and modifiers). modifiers is a Dict{Symbol, NodeModifier} where the keys are nameof(typeof(NodeModifier)). Modifiying a node with several modifiers of the same type will therefore overwrite old modifiers.\n\nExample\n\njulia> struct Observed <: NodeModifier end\n\njulia> struct Label{N <: String} <: NodeModifier s::N end\n\njulia> Node(:b) ^ Label(\"some label\") ^ Observed()\nb^[Observed(), Label{String}(\"some label\")]\n\njulia> Node(:b) ^ Label(\"some label\") ^ Observed() ^ Label(\"some other label\")\nb^[Observed(), Label{String}(\"some other label\")]\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.ModifyingNode","page":"Types","title":"StenoGraphs.ModifyingNode","text":"ModifyingNode\n\nSubtype of MetaNode that contains two fields (node and modifiers). modifiers is a Dict{Symbol, EdgeModifier} where the keys are nameof(typeof(EdgeModifier)). Modifiying an node with several modifiers of the same type will therefore overwrite old modifiers. A ModifyingNode is created by multiplying it (*) with an EdgeModifier since it will modify edges build upon it. If you want to modify the node use ^ and see ModifiedNode.\n\nExample\n\njulia> struct Weight{N <: Number} <: EdgeModifier w::N end\n\njulia> struct Start{N <: Number} <: EdgeModifier s::N end\n\njulia> @StenoGraph a → b * Weight(3) * Start(2)\na → b * [Start{Int64}(2), Weight{Int64}(3)]\n\njulia> @StenoGraph a → b * Weight(3) * Start(2) * Weight(2)\na → b * [Start{Int64}(2), Weight{Int64}(2)]\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.ModifiedEdge","page":"Types","title":"StenoGraphs.ModifiedEdge","text":"ModifiedEdge\n\nSubtype of MetaEdge that contains two fields (edge and modifiers). modifiers is a Dict{Symbol, EdgeModifier} where the keys are nameof(typeof(EdgeModifier)). Modifiying an edge with several modifiers of the same type will therefore overwrite old modifiers. A ModifiedEdge is created by modifying an edge directly (with *) or via ModifyingNodes where a node is modified that than modifies the edge.\n\nExample\n\njulia> struct Weight{N <: Number} <: EdgeModifier w::N end\n\njulia> struct Start{N <: Number} <: EdgeModifier s::N end\n\njulia> ModifiedEdge(Edge(:a, :b), Weight(3))\na → b * Weight{Int64}(3)\n\njulia> ModifiedEdge(Edge(:a, :b), Weight(3)) == Edge(:a, :b) * Weight(3)\ntrue\n\njulia> ModifiedEdge(Edge(:a, :b), [Weight(3), Start(2)])\na → b * [Start{Int64}(2), Weight{Int64}(3)]\n\njulia> @StenoGraph a → b * Weight(3) * Start(2)\na → b * [Start{Int64}(2), Weight{Int64}(3)]\n\njulia> @StenoGraph a → b * Weight(3) * Start(2) * Weight(2)\na → b * [Start{Int64}(2), Weight{Int64}(2)]\n\n\n\n\n\n","category":"type"},{"location":"man/types/#Modifiers","page":"Types","title":"Modifiers","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"Modifier\nNodeModifier\nEdgeModifier","category":"page"},{"location":"man/types/#StenoGraphs.Modifier","page":"Types","title":"StenoGraphs.Modifier","text":"Modifier\n\nThe abstract type that powers EdgeModifier and NodeModifier. StenoGraphs does not implement any concrete modifiers.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.NodeModifier","page":"Types","title":"StenoGraphs.NodeModifier","text":"NodeModifier\n\nSubtype of Modifier. ModifiedNodes require NodeModifiers. NodeModifiers usually make use of ^ for creating ModifiedNodes. Since StenoGraphs does not implement any NodeModifier users must implement them. If these may contain any mutable fields (i.e. strings, vectors, arrays, etc.) users must take care to implement comparison methods.\n\nExample\n\n# `StenoGraphs` does not implement any `NodeModifier`s\njulia> struct Label <: NodeModifier l end\n\njulia> import Base.==\n\njulia> ==(x::Label, y::Label) = x.l == y.l;\n\njulia> ModifiedNode(Node(:a), Label(\"hi\")) == :a^Label(\"hi\")\ntrue\n\n\n\n\n\n\n","category":"type"},{"location":"man/types/#StenoGraphs.EdgeModifier","page":"Types","title":"StenoGraphs.EdgeModifier","text":"EdgeModifier\n\nSubtype of Modifier. ModifiedEdges require EdgeModifiers. EdgeModifiers usually make use of * for creating ModifiedEdges/ModifyingNodes. One special application for EdgeModifiers is the creation of ModifyingNodes. Since StenoGraphs does not implement any EdgeModifier users must implement them. If these are not atomic they must take care to implement comparison methods (see examples in NodeModifier)\n\nExample\n\n# `StenoGraphs` does not implement any `EdgeModifier`s\njulia> struct Weight{N <: Number} <: EdgeModifier w::N end\n\njulia> ModifiedEdge(Edge(:a, :b), Weight(.5)) == # directly create ModifiedEdge\n        Edge(:a, :b) * Weight(.5) == # modify an edge\n        Edge(:a, :b * Weight(.5)) # modify Edge throu a ModifyingNode\ntrue\n\n\n\n\n\n\n","category":"type"}]
}
