export const defaultNHCData = {
  name: "nhc-worker-default",
  remediator: "Self node remediation",
  nodeSelector:
    "!node-role.kubernetes.io/control-plane, !node-role.kubernetes.io/master",
  minHealthy: "51%",
  observedNodes: 3,
  HealthyNodes: 3,
  status: "Enabled",
};

export const clicableDefaultNHCFields = [
  "Name",
  "Labels",
  "Annotations",
  "Node selector",
  "Created at",
  "Owner",
  "Min healthy",
  "Enabled",
];
export const notClickableDefaultNHCFields = [
  "Remediator",
  "Observed nodes",
  "Healthy nodes",
  "Status",
];
