import mongoose, { Document, Types } from "mongoose";

const { Schema } = mongoose;

// Update the LeadDocument type to reflect the reference to Product
export type LeadDocument = Document & {
  phone: number;
  mobile: number;
  email: string;
  contactPerson: string;
  clientValue: number;
  size: number;
  status: string;
  team: string;
  leadChannel: string;
  currentVendor: string;
  items: string[];
  timeFrame: string;
  assignee: string;
  cordinates: number[];
  leadOwner: string;
  leadSource: string;
  leadQuality: string;
  client: string;
  website: string;
  decisionMaker: string;
  spoc: string;
  street: string;
  state: string;
  stateType: string;
  dealValue: number;
  country: string;
  city: string;
  otherDistrict: string;
  district: string;
  zipCode: string;
  board: string;
  products: {
    productId: Types.ObjectId; // Ensure Types.ObjectId for productId
    selectedFeatures: Types.ObjectId[]; // Array of ObjectIds for selected features
  }[];
  noOfStudents: number;
  assignedTo: string;
  assignmentDate: string;
};

const leadSchema = new Schema<LeadDocument>({
  phone: { type: Number },
  mobile: { type: Number },
  email: { type: String },
  contactPerson: { type: String },
  clientValue: { type: Number },
  size: { type: Number },
  status: {
    type: String,
    enum: ["pending", "approved", "disapproved"], // Set possible values
    default: "pending", // Set default value
  },
  team: { type: String },
  leadChannel: { type: String },
  currentVendor: { type: String },
  items: [{ type: String }],
  timeFrame: { type: String },
  assignee: { type: String },
  cordinates: [{ type: Number }],
  leadOwner: { type: String },
  leadSource: { type: String },
  leadQuality: { type: String },
  client: { type: String },
  website: { type: String },
  decisionMaker: { type: String },
  spoc: { type: String },
  street: { type: String },
  state: { type: String },
  stateType: { type: String },
  country: { type: String },
  city: { type: String },
  otherDistrict: { type: String },
  district: { type: String },
  zipCode: { type: String },
  board: { type: String },
  dealValue:{type:Number},
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      selectedFeatures: [{ type: Schema.Types.ObjectId, ref: "Feature" }],
    },
  ],
  noOfStudents: { type: Number },
  assignedTo: { type: String },
  assignmentDate: { type: String },
});

const Lead = mongoose.model<LeadDocument>("Lead", leadSchema);

export default Lead;