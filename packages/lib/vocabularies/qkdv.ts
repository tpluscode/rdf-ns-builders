import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Qkdv {
    '': NamedNode<'http://qudt.org/vocab/dimensionvector/'>;
    "A-1E0L-3I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L-3I0M0H0T0D0'>;
    "A-1E0L0I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L0I0M0H0T0D0'>;
    "A-1E0L0I0M1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L0I0M1H0T0D0'>;
    "A-1E0L2I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L2I0M0H0T0D0'>;
    "A-1E0L2I0M1H-1T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L2I0M1H-1T-2D0'>;
    "A-1E0L2I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L2I0M1H0T-1D0'>;
    "A-1E0L2I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L2I0M1H0T-2D0'>;
    "A-1E0L3I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L3I0M0H0T-1D0'>;
    "A-1E0L3I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L3I0M0H0T0D0'>;
    "A-1E0L3I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E0L3I0M1H0T-2D0'>;
    "A-1E1L-3I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E1L-3I0M0H0T0D0'>;
    "A-1E1L0I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A-1E1L0I0M0H0T1D0'>;
    "A0E-1L0I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L0I0M1H0T-1D0'>;
    "A0E-1L0I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L0I0M1H0T-2D0'>;
    "A0E-1L0I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L0I0M1H0T-3D0'>;
    "A0E-1L1I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L1I0M0H0T0D0'>;
    "A0E-1L1I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L1I0M1H0T-2D0'>;
    "A0E-1L1I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L1I0M1H0T-3D0'>;
    "A0E-1L2I0M1H-1T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L2I0M1H-1T-3D0'>;
    "A0E-1L2I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L2I0M1H0T-2D0'>;
    "A0E-1L2I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L2I0M1H0T-3D0'>;
    "A0E-1L2I0M1H0T-4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L2I0M1H0T-4D0'>;
    "A0E-1L3I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L3I0M0H0T-1D0'>;
    "A0E-1L3I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L3I0M1H0T-2D0'>;
    "A0E-1L3I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-1L3I0M1H0T-3D0'>;
    "A0E-2L1I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-2L1I0M1H0T-2D0'>;
    "A0E-2L2I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-2L2I0M1H0T-2D0'>;
    "A0E-2L2I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-2L2I0M1H0T-3D0'>;
    "A0E-2L3I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-2L3I0M1H0T-3D0'>;
    "A0E-2L3I0M1H0T-4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-2L3I0M1H0T-4D0'>;
    "A0E-2L4I0M2H-2T-6D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E-2L4I0M2H-2T-6D0'>;
    "A0E0L-0.5I0M0.5TE0TM-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-0.5I0M0.5TE0TM-1D0'>;
    "A0E0L-0.5I0M0.5TE0TM-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-0.5I0M0.5TE0TM-2D0'>;
    "A0E0L-1.5I0M0.5TE0TM-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1.5I0M0.5TE0TM-1D0'>;
    "A0E0L-1.5I0M0.5TE0TM0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1.5I0M0.5TE0TM0D0'>;
    "A0E0L-1I0M-1H0T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M-1H0T3D0'>;
    "A0E0L-1I0M-1H1T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M-1H1T3D0'>;
    "A0E0L-1I0M0H-1T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M0H-1T-2D0'>;
    "A0E0L-1I0M0H-1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M0H-1T0D0'>;
    "A0E0L-1I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M0H0T-1D0'>;
    "A0E0L-1I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M0H0T0D0'>;
    "A0E0L-1I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M0H0T1D0'>;
    "A0E0L-1I0M0H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M0H0T2D0'>;
    "A0E0L-1I0M0H1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M0H1T0D0'>;
    "A0E0L-1I0M1H-1T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M1H-1T-2D0'>;
    "A0E0L-1I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M1H0T-1D0'>;
    "A0E0L-1I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M1H0T-2D0'>;
    "A0E0L-1I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M1H0T-3D0'>;
    "A0E0L-1I0M1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M1H0T0D0'>;
    "A0E0L-1I0M1H1T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-1I0M1H1T-3D0'>;
    "A0E0L-2I0M-1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M-1H0T2D0'>;
    "A0E0L-2I0M-1H1T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M-1H1T3D0'>;
    "A0E0L-2I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M0H0T-1D0'>;
    "A0E0L-2I0M0H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M0H0T-2D0'>;
    "A0E0L-2I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M0H0T0D0'>;
    "A0E0L-2I0M0H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M0H0T2D0'>;
    "A0E0L-2I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M1H0T-1D0'>;
    "A0E0L-2I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M1H0T-2D0'>;
    "A0E0L-2I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M1H0T-3D0'>;
    "A0E0L-2I0M1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M1H0T0D0'>;
    "A0E0L-2I0M1H1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M1H1T0D0'>;
    "A0E0L-2I0M2H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M2H0T-2D0'>;
    "A0E0L-2I0M2H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M2H0T-3D0'>;
    "A0E0L-2I0M2H0T-6D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I0M2H0T-6D0'>;
    "A0E0L-2I1M-1H0T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I1M-1H0T3D0'>;
    "A0E0L-2I1M-1H0T3D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I1M-1H0T3D1'>;
    "A0E0L-2I1M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I1M0H0T0D0'>;
    "A0E0L-2I1M0H0T0D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I1M0H0T0D1'>;
    "A0E0L-2I1M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-2I1M0H0T1D0'>;
    "A0E0L-3I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-3I0M0H0T-1D0'>;
    "A0E0L-3I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-3I0M0H0T0D0'>;
    "A0E0L-3I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-3I0M0H0T1D0'>;
    "A0E0L-3I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-3I0M1H0T-1D0'>;
    "A0E0L-3I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-3I0M1H0T-3D0'>;
    "A0E0L-3I0M1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-3I0M1H0T0D0'>;
    "A0E0L-4I0M-2H0T4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-4I0M-2H0T4D0'>;
    "A0E0L-4I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L-4I0M1H0T-1D0'>;
    "A0E0L0.5I0M0.5TE0TM-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0.5I0M0.5TE0TM-1D0'>;
    "A0E0L0.5I0M0.5TE0TM-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0.5I0M0.5TE0TM-2D0'>;
    "A0E0L0.5I0M0.5TE0TM0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0.5I0M0.5TE0TM0D0'>;
    "A0E0L0I0M-1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M-1H0T-1D0'>;
    "A0E0L0I0M-1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M-1H0T0D0'>;
    "A0E0L0I0M-1H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M-1H0T1D0'>;
    "A0E0L0I0M-1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M-1H0T2D0'>;
    "A0E0L0I0M-1H1T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M-1H1T3D0'>;
    "A0E0L0I0M-2H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M-2H0T0D0'>;
    "A0E0L0I0M0H-1T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H-1T-1D0'>;
    "A0E0L0I0M0H-1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H-1T0D0'>;
    "A0E0L0I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H0T-1D0'>;
    "A0E0L0I0M0H0T-1D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H0T-1D1'>;
    "A0E0L0I0M0H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H0T-2D0'>;
    "A0E0L0I0M0H0T-2D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H0T-2D1'>;
    "A0E0L0I0M0H0T0D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H0T0D1'>;
    "A0E0L0I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H0T1D0'>;
    "A0E0L0I0M0H0T1D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H0T1D1'>;
    "A0E0L0I0M0H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H0T2D0'>;
    "A0E0L0I0M0H1T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H1T-1D0'>;
    "A0E0L0I0M0H1T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H1T-2D0'>;
    "A0E0L0I0M0H1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H1T0D0'>;
    "A0E0L0I0M0H1T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H1T1D0'>;
    "A0E0L0I0M0H2T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H2T-1D0'>;
    "A0E0L0I0M0H2T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M0H2T0D0'>;
    "A0E0L0I0M1H-1T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H-1T-3D0'>;
    "A0E0L0I0M1H-4T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H-4T-3D0'>;
    "A0E0L0I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H0T-1D0'>;
    "A0E0L0I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H0T-2D0'>;
    "A0E0L0I0M1H0T-3D-1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H0T-3D-1'>;
    "A0E0L0I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H0T-3D0'>;
    "A0E0L0I0M1H0T-4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H0T-4D0'>;
    "A0E0L0I0M1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H0T0D0'>;
    "A0E0L0I0M1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H0T2D0'>;
    "A0E0L0I0M1H1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M1H1T0D0'>;
    "A0E0L0I0M2H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I0M2H0T-2D0'>;
    "A0E0L0I1M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I1M0H0T0D0'>;
    "A0E0L0I1M0H0T0D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L0I1M0H0T0D1'>;
    "A0E0L1.5I0M0.5TE0TM-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1.5I0M0.5TE0TM-1D0'>;
    "A0E0L1.5I0M0.5TE0TM-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1.5I0M0.5TE0TM-2D0'>;
    "A0E0L1I0M-1H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M-1H0T1D0'>;
    "A0E0L1I0M-1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M-1H0T2D0'>;
    "A0E0L1I0M0H-1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H-1T0D0'>;
    "A0E0L1I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H0T-1D0'>;
    "A0E0L1I0M0H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H0T-2D0'>;
    "A0E0L1I0M0H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H0T-3D0'>;
    "A0E0L1I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H0T0D0'>;
    "A0E0L1I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H0T1D0'>;
    "A0E0L1I0M0H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H0T2D0'>;
    "A0E0L1I0M0H1T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H1T-1D0'>;
    "A0E0L1I0M0H1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H1T0D0'>;
    "A0E0L1I0M0H1T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M0H1T1D0'>;
    "A0E0L1I0M1H-1T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M1H-1T-3D0'>;
    "A0E0L1I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M1H0T-1D0'>;
    "A0E0L1I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M1H0T-2D0'>;
    "A0E0L1I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M1H0T-3D0'>;
    "A0E0L1I0M1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L1I0M1H0T0D0'>;
    "A0E0L2I0M-1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M-1H0T0D0'>;
    "A0E0L2I0M-1H1T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M-1H1T-1D0'>;
    "A0E0L2I0M0H-1T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H-1T-2D0'>;
    "A0E0L2I0M0H-1T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H-1T-3D0'>;
    "A0E0L2I0M0H-1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H-1T0D0'>;
    "A0E0L2I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T-1D0'>;
    "A0E0L2I0M0H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T-2D0'>;
    "A0E0L2I0M0H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T-3D0'>;
    "A0E0L2I0M0H0T-4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T-4D0'>;
    "A0E0L2I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T0D0'>;
    "A0E0L2I0M0H0T0D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T0D1'>;
    "A0E0L2I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T1D0'>;
    "A0E0L2I0M0H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H0T2D0'>;
    "A0E0L2I0M0H1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H1T0D0'>;
    "A0E0L2I0M0H1T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M0H1T1D0'>;
    "A0E0L2I0M1H-1T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M1H-1T-2D0'>;
    "A0E0L2I0M1H-1T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M1H-1T-3D0'>;
    "A0E0L2I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M1H0T-1D0'>;
    "A0E0L2I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M1H0T-2D0'>;
    "A0E0L2I0M1H0T-3D-1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M1H0T-3D-1'>;
    "A0E0L2I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M1H0T-3D0'>;
    "A0E0L2I0M1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L2I0M1H0T0D0'>;
    "A0E0L3I0M-1H-1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M-1H-1T0D0'>;
    "A0E0L3I0M-1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M-1H0T-2D0'>;
    "A0E0L3I0M-1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M-1H0T0D0'>;
    "A0E0L3I0M0H-1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M0H-1T0D0'>;
    "A0E0L3I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M0H0T-1D0'>;
    "A0E0L3I0M0H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M0H0T-2D0'>;
    "A0E0L3I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M0H0T0D0'>;
    "A0E0L3I0M0H1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M0H1T0D0'>;
    "A0E0L3I0M1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M1H0T-1D0'>;
    "A0E0L3I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L3I0M1H0T-2D0'>;
    "A0E0L4I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L4I0M0H0T-1D0'>;
    "A0E0L4I0M0H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L4I0M0H0T-2D0'>;
    "A0E0L4I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L4I0M0H0T0D0'>;
    "A0E0L4I0M1H0T-2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L4I0M1H0T-2D0'>;
    "A0E0L4I0M1H0T-3D-1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L4I0M1H0T-3D-1'>;
    "A0E0L4I0M1H0T-3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L4I0M1H0T-3D0'>;
    "A0E0L4I0M2H0T-4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L4I0M2H0T-4D0'>;
    "A0E0L5I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L5I0M0H0T0D0'>;
    "A0E0L6I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E0L6I0M0H0T0D0'>;
    "A0E1L-1I0M-1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-1I0M-1H0T2D0'>;
    "A0E1L-1I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-1I0M0H0T0D0'>;
    "A0E1L-1I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-1I0M0H0T1D0'>;
    "A0E1L-2I0M-1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-2I0M-1H0T2D0'>;
    "A0E1L-2I0M-1H0T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-2I0M-1H0T3D0'>;
    "A0E1L-2I0M0H-2T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-2I0M0H-2T0D0'>;
    "A0E1L-2I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-2I0M0H0T0D0'>;
    "A0E1L-2I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-2I0M0H0T1D0'>;
    "A0E1L-3I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L-3I0M0H0T1D0'>;
    "A0E1L0I0M-1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M-1H0T0D0'>;
    "A0E1L0I0M-1H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M-1H0T1D0'>;
    "A0E1L0I0M-1H0T4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M-1H0T4D0'>;
    "A0E1L0I0M-1H1T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M-1H1T2D0'>;
    "A0E1L0I0M0H-1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M0H-1T0D0'>;
    "A0E1L0I0M0H0T0D-1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M0H0T0D-1'>;
    "A0E1L0I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M0H0T0D0'>;
    "A0E1L0I0M0H0T0D1": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M0H0T0D1'>;
    "A0E1L0I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L0I0M0H0T1D0'>;
    "A0E1L1I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L1I0M0H0T1D0'>;
    "A0E1L2I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L2I0M0H0T0D0'>;
    "A0E1L2I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E1L2I0M0H0T1D0'>;
    "A0E2L-2I0M-1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L-2I0M-1H0T2D0'>;
    "A0E2L-2I0M-1H0T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L-2I0M-1H0T3D0'>;
    "A0E2L-2I0M-1H0T4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L-2I0M-1H0T4D0'>;
    "A0E2L-3I0M-1H0T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L-3I0M-1H0T3D0'>;
    "A0E2L-3I0M-1H0T4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L-3I0M-1H0T4D0'>;
    "A0E2L-4I0M-1H0T3D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L-4I0M-1H0T3D0'>;
    "A0E2L0I0M-1H0T4D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L0I0M-1H0T4D0'>;
    "A0E2L0I0M0H0T1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L0I0M0H0T1D0'>;
    "A0E2L2I0M-1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E2L2I0M-1H0T2D0'>;
    "A0E3L-1I0M-2H0T7D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E3L-1I0M-2H0T7D0'>;
    "A0E4L-2I0M-3H0T10D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E4L-2I0M-3H0T10D0'>;
    "A0E4L-5I0M-3H0T10D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A0E4L-5I0M-3H0T10D0'>;
    "A1E0L-2I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L-2I0M0H0T-1D0'>;
    "A1E0L-2I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L-2I0M0H0T0D0'>;
    "A1E0L-3I0M-1H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L-3I0M-1H0T2D0'>;
    "A1E0L-3I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L-3I0M0H0T-1D0'>;
    "A1E0L-3I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L-3I0M0H0T0D0'>;
    "A1E0L0I0M-1H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L0I0M-1H0T-1D0'>;
    "A1E0L0I0M-1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L0I0M-1H0T0D0'>;
    "A1E0L0I0M0H0T-1D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L0I0M0H0T-1D0'>;
    "A1E0L0I0M0H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L0I0M0H0T0D0'>;
    "A1E0L0I0M0H1T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L0I0M0H1T0D0'>;
    "A1E0L0I0M1H0T0D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L0I0M1H0T0D0'>;
    "A1E0L1I0M-2H0T2D0": NamedNode<'http://qudt.org/vocab/dimensionvector/A1E0L1I0M-2H0T2D0'>;
}

const builder = namespace("http://qudt.org/vocab/dimensionvector/") as any;
export const strict = builder as NamespaceBuilder<keyof Qkdv> & Qkdv;
export const loose = builder as NamespaceBuilder & Qkdv;
