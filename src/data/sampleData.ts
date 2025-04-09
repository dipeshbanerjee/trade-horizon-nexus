
import { Transaction } from "@/types";

export const transactions: Transaction[] = [
  {
    id: "1",
    type: "import",
    referenceNumber: "IMP-2025-001",
    date: "2025-04-05",
    customer: "Tech Solutions Inc.",
    origin: "Shanghai, China",
    destination: "Los Angeles, USA",
    items: ["Computer Parts", "Electronic Components"],
    value: 45000,
    status: "in-transit"
  },
  {
    id: "2",
    type: "export",
    referenceNumber: "EXP-2025-001",
    date: "2025-04-03",
    customer: "European Distributors Ltd",
    origin: "New York, USA",
    destination: "Hamburg, Germany",
    items: ["Medical Equipment", "Pharmaceuticals"],
    value: 78000,
    status: "pending"
  },
  {
    id: "3",
    type: "import",
    referenceNumber: "IMP-2025-002",
    date: "2025-03-28",
    customer: "Retail Chains Co.",
    origin: "Bangkok, Thailand",
    destination: "Seattle, USA",
    items: ["Textiles", "Apparel"],
    value: 32000,
    status: "completed"
  },
  {
    id: "4",
    type: "export",
    referenceNumber: "EXP-2025-002",
    date: "2025-03-25",
    customer: "Global Foods SA",
    origin: "Miami, USA",
    destination: "São Paulo, Brazil",
    items: ["Processed Foods", "Canned Goods"],
    value: 54000,
    status: "in-transit"
  },
  {
    id: "5",
    type: "import",
    referenceNumber: "IMP-2025-003",
    date: "2025-03-20",
    customer: "Automotive Parts Ltd",
    origin: "Stuttgart, Germany",
    destination: "Detroit, USA",
    items: ["Car Components", "Engine Parts"],
    value: 105000,
    status: "pending"
  },
  {
    id: "6",
    type: "export",
    referenceNumber: "EXP-2025-003",
    date: "2025-03-18",
    customer: "Pacific Traders",
    origin: "San Francisco, USA",
    destination: "Sydney, Australia",
    items: ["Heavy Machinery", "Construction Equipment"],
    value: 230000,
    status: "completed"
  },
  {
    id: "7",
    type: "import",
    referenceNumber: "IMP-2025-004",
    date: "2025-03-15",
    customer: "Home Goods Retail",
    origin: "Hanoi, Vietnam",
    destination: "Portland, USA",
    items: ["Furniture", "Home Decor"],
    value: 48000,
    status: "in-transit"
  },
  {
    id: "8",
    type: "export",
    referenceNumber: "EXP-2025-004",
    date: "2025-03-10",
    customer: "Middle East Importers",
    origin: "Chicago, USA",
    destination: "Dubai, UAE",
    items: ["Industrial Equipment", "Water Purification Systems"],
    value: 185000,
    status: "pending"
  }
];
