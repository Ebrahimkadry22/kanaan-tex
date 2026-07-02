import {
  FaExclamationTriangle,
  FaTruck,
  FaCommentDots,
  FaLightbulb,
} from "react-icons/fa";

const reportCategories = [
  {
    id: 1,
    title: "Product Issue",
    icon: FaExclamationTriangle,
    description: "Report a problem with a product.",
  },
  {
    id: 2,
    title: "Delivery Issue",
    icon: FaTruck,
    description: "Report shipping or delivery issues.",
  },
  {
    id: 3,
    title: "Complaint",
    icon: FaCommentDots,
    description: "Submit a complaint about our service.",
  },
  {
    id: 4,
    title: "Suggestion",
    icon: FaLightbulb,
    description: "Help us improve with your ideas.",
  },
];

export default reportCategories;