import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DropdownTreeSelect from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css';
import { withStyles } from '@material-ui/core/styles';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.renderCategory = this.renderCategory.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentDidMount() {
    this.props.callback();
  }

  renderError() {
    let words = this.props.name.split(" ");
    if (words.some(word => word.length > 49)) {
      return (
        <p
          style={{
            fontSize: 15,
            position: "relative",
            bottom: 10,
            color: "red"
          }}
        >
          <span style={{fontWeight: 700}}>!</span> Please limit length of words to less than 50 characters each
        </p>
      );
    }
  }

  renderCategory() {
    if (this.props.category) {
      return (
        <div style={{
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
          marginLeft: 50,
          marginRight: 10,
          borderRadius: 4,
          color: "white",
          backgroundColor: "#4886B0"
        }}>
          {this.props.category.label}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div style={styles.form}>
          <p style={{fontSize: 25}}>Title</p>
          <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 1 of {this.props.onsite ? 11 : 8}</p>
          <hr style={{position: "relative", bottom: 35}}/>
          <FormControl>
            <InputLabel
              FormLabelClasses={{
                root: this.props.classes.cssLabel,
                focused: this.props.classes.cssFocused,
              }}
            >
              Enter the name of your job post
            </InputLabel>
            <Input
              placeholder="Here are some good examples - Developer needed for creating a responsive wordpress theme, CAD designer to create a 3D model of a residential building, Need a design for a new company logo"
              fullWidth="true"
              multiline="true"
              rows="2"
              onChange={this.props.cb1}
              value={this.props.name}
              id="custom-css-input"
              classes={{
                root: this.props.classes.root,
                underline: this.props.classes.cssUnderline,
              }}
            />
          </FormControl>
          {this.renderError()}
        </div>
        <div style={styles.form}>
          <p style={{fontSize: 25}}>Job Category</p>
          <div style={{display: "flex"}}>
            <div>
              <DropdownTreeSelect
                data={categoryData}
                placeholderText={"Select category"}
                onChange={this.props.cb2}
              />
            </div>
            {this.renderCategory()}
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
  form: {
    backgroundColor: "#F8F8F8",
    marginTop: 25,
    marginRight: 25,
    width: 1000,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    border: "solid 1px black",
    borderRadius: 20
  },
  cssLabel: {
    '&$cssFocused': {
      color: "black",
    }
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: "black",
    }
  },
  root: {
    width: 950
  }
};

const categoryData = [
  {
    label: "Web, Mobile & Software Development",
    value: "webMobileSoftwareDev",
    children: [
      {
        label: "Desktop Software Development",
        value: "desktopSoftwareDev"
      },
      {
        label: "Ecommerce Development",
        value: "ecommerceDev"
      },
      {
        label: "Game Development",
        value: "gameDev"
      },
      {
        label: "Mobile Development",
        value: "mobileDev"
      },
      {
        label: "Product Management",
        value: "productManagement"
      },
      {
        label: "Q&A Testing",
        value: "QAtesting"
      },
      {
        label: "Scripting & Utilities",
        value: "scriptingUtilities"
      },
      {
        label: "Web Development",
        value: "webDev"
      },
      {
        label: "Web & Mobile Design",
        value: "webMobileDesign"
      },
      {
        label: "Other - Software Development",
        value: "otherSoftwareDev"
      }
    ]
  },
  {
    label: "IT & Networking",
    value: "ITnetworking",
    children: [
      {
        label: "ERP / CRM Software",
        value: "ERPCRMsoftware"
      },
      {
        label: "Information Security",
        value: "informationSecurity"
      },
      {
        label: "Networking & Systems Adminstration",
        value: "networkingSystemsAdministration"
      },
      {
        label: "Other - IT & Networking",
        value: "otherITnetworking"
      }
    ]
  },
  {
    label: "Data Science & Analytics",
    value: "dataScienceAnalytics",
    children: [
      {
        label: "A/B Testing",
        value: "ABtesting"
      },
      {
        label: "Data Visualization",
        value: "dataVisualization"
      },
      {
        label: "Data Mining & Management",
        value: "dataMiningManagement"
      },
      {
        label: "Data Extraction / ETL",
        value: "dataExtractionETL"
      },
      {
        label: "Machine Learning",
        value: "machineLearning"
      },
      {
        label: "Quantitative Analysis",
        value: "quantitativeAnalysis"
      },
      {
        label: "Other - Data Science & Analytics",
        value: "otherDataScienceAnalytics"
      }
    ]
  },
  {
    label: "Engineering & Architecture",
    value: "engineeringArchitecture",
    children: [
      {
        label: "3D Modeling & CAD",
        value: "3DModelingCAD"
      },
      {
        label: "Architecture",
        value: "architecture"
      },
      {
        label: "Chemical Engineering",
        value: "chemicalEngineering"
      },
      {
        label: "Civil & Structural Engineering",
        value: "civilStructuralEngineering"
      },
      {
        label: "Contract Manufacturing",
        value: "contractManufacturing"
      },
      {
        label: "Electrical Engineering",
        value: "electricalEngineering"
      },
      {
        label: "Interior Design",
        value: "interiorDesign"
      },
      {
        label: "Mechanical Engineering",
        value: "mechanicalEngineering"
      },
      {
        label: "Product Design",
        value: "productDesign"
      },
      {
        label: "Other - Engineering & Architecture",
        value: "otherEngineeringArchitecture"
      }
    ]
  },
  {
    label: "Design & Creative",
    value: "designCreative",
    children: [
      {
        label: "Animation",
        value: "animation"
      },
      {
        label: "Audio Production",
        value: "audioProduction"
      },
      {
        label: "Graphic Design",
        value: "graphicDesign"
      },
      {
        label: "Illustration",
        value: "illustration"
      },
      {
        label: "Logo Design & Branding",
        value: "logoDesignBranding"
      },
      {
        label: "Photography",
        value: "photography"
      },
      {
        label: "Presentation",
        value: "presentation"
      },
      {
        label: "Video Production Voice Talent",
        value: "videoProductionVoiceTalent"
      },
      {
        label: "Other - Design & Creative",
        value: "otherDesignCreative"
      }
    ]
  },
  {
    label: "Writing",
    value: "writing",
    children: [
      {
        label: "Academic Writing & Research",
        value: "academicWritingResearch"
      },
      {
        label: "Article & Blog Writing",
        value: "articleBlogWriting"
      },
      {
        label: "Copywriting",
        value: "copywriting"
      },
      {
        label: "Creative Writing",
        value: "creativeWriting"
      },
      {
        label: "Editing Proofreading",
        value: "editingProofreading"
      },
      {
        label: "Grant Writing",
        value: "grantWriting"
      },
      {
        label: "Resumes & Cover Letters",
        value: "resumesCoverLetters"
      },
      {
        label: "Technical Writing",
        value: "technicalWriting"
      },
      {
        label: "Web Content",
        value: "webContent"
      },
      {
        label: "Other - Writing",
        value: "otherWriting"
      }
    ]
  },
  {
    label: "Translation",
    value: "translation",
    children: [
      {
        label: "General Translation",
        value: "generalTranslation"
      },
      {
        label: "Legal Translation",
        value: "legalTranslation"
      },
      {
        label: "Technical Translation",
        value: "technicalTranslation"
      },
      {
        label: "Other - Translation",
        value: "otherTranslation"
      }
    ]
  },
  {
    label: "Legal",
    value: "legal",
    children: [
      {
        label: "Contract Law",
        value: "contractLaw"
      },
      {
        label: "Corporate Law",
        value: "corporateLaw"
      },
      {
        label: "Criminal Law",
        value: "criminalLaw"
      },
      {
        label: "Family Law",
        value: "familyLaw"
      },
      {
        label: "Intellectual Property Law",
        value: "IPlaw"
      },
      {
        label: "Paralegal Services",
        value: "paralegalServices"
      },
      {
        label: "Other - Legal",
        value: "otherLegal"
      }
    ]
  },
  {
    label: "Admin Support",
    value: "adminSupport",
    children: [
      {
        label: "Data Entry",
        value: "dataEntry"
      },
      {
        label: "Personal / Virtual Assistance",
        value: "personalVirtualAssistance"
      },
      {
        label: "Project Management",
        value: "projectManagement"
      },
      {
        label: "Transaction",
        value: "transaction"
      },
      {
        label: "Web Research",
        value: "webResearch"
      },
      {
        label: "Other - Admin Support",
        value: "otherAdminSupport"
      }
    ]
  },
  {
    label: "Customer Service",
    value: "customerService",
    children: [
      {
        label: "Customer Service",
        value: "customerService"
      },
      {
        label: "Technical Support",
        value: "techSupport"
      },
      {
        label: "Other - Customer Services",
        value: "otherCustomerServices"
      }
    ]
  },
  {
    label: "Sales & Marketing",
    value: "salesMarketing",
    children: [
      {
        label: "Display Advertising",
        value: "displayAdvertising"
      },
      {
        label: "Email & Marketing Automation",
        value: "emailMarketingAutomation"
      },
      {
        label: "Lead Generation",
        value: "leadGeneration"
      },
      {
        label: "Marketing & Customer Research",
        value: "marketingCustomerResearch"
      },
      {
        label: "Marketing Strategy",
        value: "marketingStrategy"
      },
      {
        label: "Public Relations",
        value: "PR"
      },
      {
        label: "SEM - Search Engineer Marketing",
        value: "SEM"
      },
      {
        label: "SEO - Search Engine Optimization",
        value: "SEO"
      },
      {
        label: "Telemarketing & Telesales",
        value: "telemarketingTelesales"
      },
      {
        label: "Other - Sales Marketing",
        value: "otherSalesMarketing"
      }
    ]
  },
  {
    label: "Accounting & Consulting",
    value: "accountingConsulting",
    children: [
      {
        label: "Accounting",
        value: "accounting"
      },
      {
        label: "Financial Resources",
        value: "financialResources"
      },
      {
        label: "Human Resources",
        value: "humanResources"
      },
      {
        label: "Management Consulting",
        value: "managementConsulting"
      },
      {
        label: "Other - Accounting & Consulting",
        value: "otherAccountingConsulting"
      }
    ]
  }
];

export default withStyles(styles)(Title);
