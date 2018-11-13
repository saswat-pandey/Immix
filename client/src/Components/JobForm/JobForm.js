import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidebar';
import GettingStarted from './GettingStarted';
import Summary from './Summary';
import Title from './Title';
import Description from './Description';
import Details from './Details';
import Expertise from './Expertise';
import Location from './Location';
import Visibility from './Visibility';
import Budget from './Budget';
import Review from './Review';
import Submit from './Submit';
import Deliverables from './Deliverables';
import Shipments from './Shipments';
import Routing from './Routing';

export default class JobForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      action: "",
      jobType: "",
      usesWindows: false,
      usesMac: false,
      usesLinux: false,
      paymentAPI: false,
      cloudAPI: false,
      socialMediaAPI: false,
      otherAPI: false,
      appStage: "",
      name: "",
      // Category Name Properly Capitalized will be found on this.state.category.label
      // categoryValueCamelCased will be found on this.state.category.value
      category: null,
      desc: "",
      files: null,
      projectStatus: "",
      // Full question will be found on question.label
      // Short ID value will be found on question.id
      // Questions array format:
      // [{ id, label }, ...]
      questions: [],
      skills: [],
      unwantedSkills: [],
      remoteProjectLocation: "",
      onsiteProjectLocation: {
        name: "",
        number: "",
        type: "",
        travelInstructions: "",
        address: {
          line1: "",
          line2: "",
          suiteFloor: "",
          city: "",
          state: "",
          zip: "",
          country: ""
        }
      },
      timezones: [],
      deliverables: [],
      partsDelivery: "",
      shippingDestination: "",
      returnParts: false,
      // array of part shipment tracking objects
      // Parts array format:
      // [{ name, trackingNumber, price }, ...]
      parts: [],
      published: false,
      inviteTalent: "",
      visibility: "",
      freelancers: "",
      invitedFreelancers: [],
      paymentType: "",
      experienceWanted: "",
      timeToComplete: "",
      moreThan30hrs: "",
      featured: false,
      coworkers: [],
      coworkerMessage: "",
      coworkerPermission: false,
      // This is related to the sidebar, everything above is related to the job form
      reviewStep: false,
      selectedStep: null
    };

    // this.handleFileChange = this.handleFileChange.bind(this);
    this.handleLocationName = this.handleLocationName.bind(this);
    this.handleLocationNumber = this.handleLocationNumber.bind(this);
    this.handleLocationType = this.handleLocationType.bind(this);
    this.handleAddressLine1 = this.handleAddressLine1.bind(this);
    this.handleAddressLine2 = this.handleAddressLine2.bind(this);
    this.handleSuiteFloor = this.handleSuiteFloor.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleTravelInstructions = this.handleTravelInstructions.bind(this);
    this.addPart = this.addPart.bind(this);
    this.removePart = this.removePart.bind(this);
    this.handleDelivery = this.handleDelivery.bind(this);
    this.handleReturnParts = this.handleReturnParts.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleFeature = this.handleFeature.bind(this);
    this.handleActionChange = this.handleActionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleQuestions = this.handleQuestions.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.addTimezone = this.addTimezone.bind(this);
    this.removeTimezone = this.removeTimezone.bind(this);
    this.multipleFreelancers = this.multipleFreelancers.bind(this);
    this.singleFreelancer = this.singleFreelancer.bind(this);
    this.inviteFreelancer = this.inviteFreelancer.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleExisting = this.handleExisting.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleRemote = this.handleRemote.bind(this);
    this.handleOnsite = this.handleOnsite.bind(this);
    this.handleWindows = this.handleWindows.bind(this);
    this.handleMac = this.handleMac.bind(this);
    this.handleLinux = this.handleLinux.bind(this);
    this.paymentAPI = this.paymentAPI.bind(this);
    this.cloudAPI = this.cloudAPI.bind(this);
    this.socialMediaAPI = this.socialMediaAPI.bind(this);
    this.otherAPI = this.otherAPI.bind(this);
    this.handleSpecs = this.handleSpecs.bind(this);
    this.handleDesigns = this.handleDesigns.bind(this);
    this.handleConcept = this.handleConcept.bind(this);
    this.handleOneTime = this.handleOneTime.bind(this);
    this.handleOngoing = this.handleOngoing.bind(this);
    this.unsureStatus = this.unsureStatus.bind(this);
    this.handleUSonly = this.handleUSonly.bind(this);
    this.handleWorldwide = this.handleWorldwide.bind(this);
    this.handleImmix = this.handleImmix.bind(this);
    this.handlePublic = this.handlePublic.bind(this);
    this.handleInvOnly = this.handleInvOnly.bind(this);
    this.handleHourly = this.handleHourly.bind(this);
    this.handleFixed = this.handleFixed.bind(this);
    this.handleEntry = this.handleEntry.bind(this);
    this.handleIntermediate = this.handleIntermediate.bind(this);
    this.handleExpert = this.handleExpert.bind(this);
    this.handleShort = this.handleShort.bind(this);
    this.handleMedium = this.handleMedium.bind(this);
    this.handleLong = this.handleLong.bind(this);
    this.lessThan30 = this.lessThan30.bind(this);
    this.moreThan30 = this.moreThan30.bind(this);
    this.unsureOf30 = this.unsureOf30.bind(this);
    this.showTitle = this.showTitle.bind(this);
    this.showDescription = this.showDescription.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.showExpertise = this.showExpertise.bind(this);
    this.showLocation = this.showLocation.bind(this);
    this.showVisibility = this.showVisibility.bind(this);
    this.showBudget = this.showBudget.bind(this);
    this.showReview = this.showReview.bind(this);
    this.showStart = this.showStart.bind(this);
    this.showNext = this.showNext.bind(this);
    this.handleCoworkers = this.handleCoworkers.bind(this);
    this.coworkerPermission = this.coworkerPermission.bind(this);
    this.coworkerMessage = this.coworkerMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDraft = this.handleDraft.bind(this);
    this.handleTemplate = this.handleTemplate.bind(this);
    this.selectExistingDraft = this.selectExistingDraft.bind(this);
    this.reopenPreviousJob = this.reopenPreviousJob.bind(this);
    this.handleUnwanted = this.handleUnwanted.bind(this);
    this.showDeliverables = this.showDeliverables.bind(this);
    this.showShipments = this.showShipments.bind(this);
    this.showRouting = this.showRouting.bind(this);
    this.handleInviteTalent = this.handleInviteTalent.bind(this);
  }

  // handleFileChange(e) {
  //
  // }

  handleSubmit() {

  }

  handleDraft() {

  }

  handleTemplate() {

  }

  selectExistingDraft(e) {
    // Will fetch job from database and populate app form data with job info
  }

  reopenPreviousJob(e) {
    // Will fetch job from database and populate app form data with job info
  }

  handleLocationName(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        name: e.target.value
      }
    });
  }

  handleLocationNumber(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        number: e.target.value
      }
    });
  }

  handleLocationType(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        type: e.target.value
      }
    });
  }

  handleAddressLine1(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        address: {
          ...this.state.onsiteProjectLocation.address,
          line1: e.target.value
        }
      }
    });
  }

  handleAddressLine2(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        address: {
          ...this.state.onsiteProjectLocation.address,
          line2: e.target.value
        }
      }
    });
  }

  handleSuiteFloor(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        address: {
          ...this.state.onsiteProjectLocation.address,
          suiteFloor: e.target.value
        }
      }
    });
  }

  handleCity(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        address: {
          ...this.state.onsiteProjectLocation.address,
          city: e.target.value
        }
      }
    });
  }

  handleState(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        address: {
          ...this.state.onsiteProjectLocation.address,
          state: e.target.value
        }
      }
    });
  }

  handleZip(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        address: {
          ...this.state.onsiteProjectLocation.address,
          zip: e.target.value
        }
      }
    });
  }

  handleCountry(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        address: {
          ...this.state.onsiteProjectLocation.address,
          country: e.target.value
        }
      }
    });
  }

  handleTravelInstructions(e) {
    this.setState({
      onsiteProjectLocation: {
        ...this.state.onsiteProjectLocation,
        travelInstructions: e.target.value
      }
    });
  }

  addPart(part) {
    if (part.name && part.trackingNumber && part.price) {
      let temp = this.state.parts;
      if (temp.every(p => p.trackingNumber != part.trackingNumber)) {
        temp.push(part);
        this.setState({ parts: temp });
      }
    }
  }

  removePart(part) {
    let temp = this.state.parts;
    if (temp.some(p => p.trackingNumber == part.trackingNumber)) {
      let filtered = temp.filter(p => p.trackingNumber != part.trackingNumber);
      this.setState({ parts: filtered });
    }
  }

  handleDelivery(e) {
    this.setState({ partsDelivery: e.target.value });
  }

  handleReturnParts() {
    this.setState({ returnParts: !this.state.returnParts });
  }

  handleInviteTalent(e) {
    this.setState({ inviteTalent: e.target.value });
  }

  handlePublish() {
    this.setState({ published: !this.state.published });
  }

  removeTimezone(timezone) {
    let temp = this.state.timezones.filter(i => i !== timezone);
    this.setState({ timezones: temp });
  }

  addTimezone(e) {
    if (this.state.timezones.length <= 2) {
      let temp = this.state.timezones;
      temp.push(e.target.value);
      this.setState({ timezones: temp });
    } else {
      window.alert("You may select a maximum of 3 timezones.")
    }
  }

  coworkerMessage(e) {
    this.setState({ coworkerMessage: e.target.value });
  }

  coworkerPermission() {
    this.setState({ coworkerPermission: !this.state.coworkerPermission });
  }

  handleCoworkers(e) {
    let coworkers = e.target.value.split(",")
      .map(email => email.trim())
      .filter(email => email !== "");
    this.setState({ coworkers });
  }

  handleFeature() {
    this.setState({ featured: !this.state.featured });
  }

  showStart() {
    this.setState({ selectedStep: 100 });
  }

  showNext() {
    this.setState({ selectedStep: 101 });
  }

  handleHourly() {
    this.setState({ paymentType: "hourly" });
  }

  handleFixed() {
    this.setState({ paymentType: "fixed" });
  }

  handleEntry() {
    this.setState({ experienceWanted: "entry" });
  }

  handleIntermediate() {
    this.setState({ experienceWanted: "intermediate" });
  }

  handleExpert() {
    this.setState({ experienceWanted: "expert" });
  }

  handleShort() {
    this.setState({ timeToComplete: "short" });
  }

  handleMedium() {
    this.setState({ timeToComplete: "medium" });
  }

  handleLong() {
    this.setState({ timeToComplete: "long" });
  }

  moreThan30() {
    this.setState({ moreThan30hrs: "yes" });
  }

  lessThan30() {
    this.setState({ moreThan30hrs: "no" });
  }

  unsureOf30() {
    this.setState({ moreThan30hrs: "unsure" });
  }

  handleImmix() {
    this.setState({ visibility: "immix" });
  }

  handlePublic() {
    this.setState({ visibility: "public" });
  }

  handleInvOnly() {
    this.setState({ visibility: "inviteOnly" });
  }

  handleUSonly() {
    this.setState({ remoteProjectLocation: "USonly" });
  }

  handleWorldwide() {
    this.setState({ remoteProjectLocation: "worldwide" });
  }

  handleOneTime() {
    this.setState({ projectStatus: "oneTime" });
  }

  handleOngoing() {
    this.setState({ projectStatus: "ongoing" });
  }

  unsureStatus() {
    this.setState({ projectStatus: "unsure" });
  }

  handleWindows() {
    this.setState({ usesWindows: !this.state.usesWindows });
  }

  handleMac() {
    this.setState({ usesMac: !this.state.usesMac });
  }

  handleLinux() {
    this.setState({ usesLinux: !this.state.usesLinux });
  }

  handleSpecs() {
    this.setState({ appStage: "specifications" });
  }

  handleDesigns() {
    this.setState({ appStage: "designs" });
  }

  handleConcept() {
    this.setState({ appStage: "concept" });
  }

  paymentAPI() {
    this.setState({ paymentAPI: !this.state.paymentAPI });
  }

  socialMediaAPI() {
    this.setState({ socialMediaAPI: !this.state.socialMediaAPI });
  }

  otherAPI() {
    this.setState({ otherAPI: !this.state.otherAPI });
  }

  cloudAPI() {
    this.setState({ cloudAPI: !this.state.cloudAPI });
  }

  handleRemote() {
    this.setState({ jobType: "remote" });
  }

  handleOnsite() {
    this.setState({ jobType: "onsite" });
  }

  handleNew() {
    this.setState({ type: "new" });
  }

  handleExisting() {
    this.setState({ type: "existing" });
  }

  handlePrevious() {
    this.setState({ type: "previous" });
  }

  handleActionChange(e) {
    this.setState({ action: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCategoryChange(e) {
    this.setState({ category: e });
  }

  handleDescChange(e) {
    if (e.target.value.length <= 6000) {
      this.setState({ desc: e.target.value });
    }
  }

  handleStatus(e) {
    this.setState({ projectStatus: e.target.value });
  }

  handleQuestions(question) {
    let temp = this.state.questions;
    if (temp.some(q => q.id == question.id)) {
      let filtered = temp.filter(q => q.id != question.id);
      this.setState({ questions: filtered });
    } else if (temp.length < 5) {
      temp.push(question);
      this.setState({ questions: temp });
    }
  }

  handleSkills(skill) {
    let temp = this.state.skills;
    if (temp.some(s => s.id == skill.id)) {
      let filtered = temp.filter(s => s.id != skill.id);
      this.setState({ skills: filtered });
    } else {
      temp.push(skill);
      this.setState({ skills: temp });
    }
  }

  handleUnwanted(skill) {
    let temp = this.state.unwantedSkills;
    if (temp.some(s => s.id == skill.id)) {
      let filtered = temp.filter(s => s.id != skill.id);
      this.setState({ unwantedSkills: filtered });
    } else {
      temp.push(skill);
      this.setState({ unwantedSkills: temp });
    }
  }

  singleFreelancer() {
    this.setState({ freelancers: "one" });
  }

  multipleFreelancers() {
    this.setState({ freelancers: "many" });
  }

  inviteFreelancer(e) {
    let invitedFreelancers = e.target.value.split(",")
      .map(freelancer => freelancer.trim())
      .filter(freelancer => freelancer !== "");
    this.setState({ invitedFreelancers });
  }

  handleReview() {
    this.setState({
      reviewStep: true
    });
  }

  showTitle() {
    this.setState({ selectedStep: 1 });
  }

  showDescription() {
    this.setState({ selectedStep: 2 });
  }

  showDetails() {
    this.setState({ selectedStep: 3 });
  }

  showExpertise() {
    this.setState({ selectedStep: 4 });
  }

  showLocation() {
    this.setState({ selectedStep: 5 });
  }

  showVisibility() {
    this.setState({ selectedStep: 6 });
  }

  showBudget() {
    this.setState({ selectedStep: 7 });
  }

  showReview() {
    this.setState({ selectedStep: 8 });
  }

  showDeliverables() {
    this.setState({ selectedStep: 10 });
  }

  showShipments() {
    this.setState({ selectedStep: 11 });
  }

  showRouting() {
    this.setState({ selectedStep: 12 });
  }

  render() {
    return (
      <div style={styles.main}>
        <Sidebar
          step1={this.state.name || this.state.category ? true : false}
          step2={this.state.desc || this.state.files ? true : false}
          step3={this.state.projectStatus || (this.state.questions.length > 0) ? true : false}
          step4={this.state.skills.length > 0 ? true : false}
          step5={this.state.remoteProjectLocation || (this.state.timezones.length > 0) ? true : false}
          step6={this.state.visibility || this.state.invitedFreelancers.length > 0 ? true : false}
          step7={this.state.paymentType ||
            this.state.experienceWanted ||
            this.state.timeToComplete ||
            this.state.moreThan30hrs ? true : false}
          step8={this.state.reviewStep ? true : false}
          step10={true}
          step11={true}
          step12={true}
          step={this.state.selectedStep}
          onsite={this.state.jobType === "onsite" ? true : false}
        />
        <div style={{marginLeft: 30}}>
          <Switch>
            <Route exact path="/newjob" render={() => (
              <div>
                <div style={styles.form}>
                  <GettingStarted
                    cb1={this.handleActionChange}
                    cb2={this.handleNew}
                    cb3={this.handleExisting}
                    cb4={this.handlePrevious}
                    cb5={this.selectExistingDraft}
                    cb6={this.reopenPreviousJob}
                    type={this.state.type}
                    action={this.state.action}
                    callback={this.showStart}
                  />
                </div>
                <Nav back="/newjob/12" next="/newjob/0" />
              </div>
            )}/>
            <Route exact path="/newjob/0" render={() => (
              <div>
                <div style={styles.form}>
                  <Summary
                    jobType={this.state.jobType}
                    usesWindows={this.state.usesWindows}
                    usesMac={this.state.usesMac}
                    usesLinux={this.state.usesLinux}
                    paymentAPI={this.state.paymentAPI}
                    cloudAPI={this.state.cloudAPI}
                    socialMediaAPI={this.state.socialMediaAPI}
                    otherAPI={this.state.otherAPI}
                    appStage={this.state.appStage}
                    cb1={this.handleRemote}
                    cb2={this.handleOnsite}
                    cb3={this.handleWindows}
                    cb4={this.handleMac}
                    cb5={this.handleLinux}
                    cb6={this.paymentAPI}
                    cb7={this.cloudAPI}
                    cb8={this.socialMediaAPI}
                    cb9={this.otherAPI}
                    cb10={this.handleSpecs}
                    cb11={this.handleDesigns}
                    cb12={this.handleConcept}
                    callback={this.showNext}
                  />
                </div>
                <Nav back="/newjob" next="/newjob/1" />
              </div>
            )}/>
            <Route exact path="/newjob/1" render={() => (
              <div>
                <div>
                  <Title
                    cb1={this.handleNameChange}
                    cb2={this.handleCategoryChange}
                    name={this.state.name}
                    category={this.state.category}
                    callback={this.showTitle}
                    onsite={this.state.jobType === "onsite" ? true : false}
                  />
                </div>
                <Nav back="/newjob/0" next="/newjob/2" />
              </div>
            )}/>
            <Route exact path="/newjob/2" render={() => (
              <div>
                <div>
                  <Description
                    desc={this.state.desc}
                    files={this.state.files}
                    cb1={this.handleDescChange}
                    cb2={this.handleFileChange}
                    callback={this.showDescription}
                    onsite={this.state.jobType === "onsite" ? true : false}
                  />
                </div>
                <Nav back="/newjob/1" next="/newjob/3" />
              </div>
            )}/>
            <Route exact path="/newjob/3" render={() => (
              <div>
                <div style={styles.form}>
                  <Details
                    projectStatus={this.state.projectStatus}
                    questions={this.state.questions}
                    cb1={this.handleQuestions}
                    cb2={this.handleOneTime}
                    cb3={this.handleOngoing}
                    cb4={this.unsureStatus}
                    callback={this.showDetails}
                    onsite={this.state.jobType === "onsite" ? true : false}
                  />
                </div>
                <Nav back="/newjob/2" next="/newjob/4" />
              </div>
            )}/>
            <Route exact path="/newjob/4" render={() => (
              <div>
                <div style={styles.form}>
                  <Expertise
                    cb1={this.handleSkills}
                    cb2={this.handleUnwanted}
                    skills={this.state.skills}
                    unwantedSkills={this.state.unwantedSkills}
                    callback={this.showExpertise}
                    onsite={this.state.jobType === "onsite" ? true : false}
                  />
                </div>
                <Nav back="/newjob/3" next="/newjob/5" />
              </div>
            )}/>
            <Route exact path="/newjob/5" render={() => (
              <div>
                <div style={styles.form}>
                  <Location
                    remoteProjectLocation={this.state.remoteProjectLocation}
                    onsiteProjectLocation={this.state.onsiteProjectLocation}
                    timezones={this.state.timezones}
                    cb1={this.handleUSonly}
                    cb2={this.handleWorldwide}
                    cb3={this.addTimezone}
                    cb4={this.removeTimezone}
                    cb5={this.handleLocationName}
                    cb6={this.handleLocationNumber}
                    cb7={this.handleLocationType}
                    cb8={this.handleAddressLine1}
                    cb9={this.handleAddressLine2}
                    cb10={this.handleSuiteFloor}
                    cb11={this.handleCity}
                    cb12={this.handleState}
                    cb13={this.handleZip}
                    cb14={this.handleCountry}
                    cb15={this.handleTravelInstructions}
                    callback={this.showLocation}
                    onsite={this.state.jobType === "onsite" ? true : false}
                  />
                </div>
                <Nav back="/newjob/4" next="/newjob/6" />
              </div>
            )}/>
            <Route exact path="/newjob/6" render={() => (
              <div>
                <div style={styles.form}>
                  <Visibility
                    visibility={this.state.visibility}
                    freelancers={this.state.freelancers}
                    cb1={this.handleImmix}
                    cb2={this.handlePublic}
                    cb3={this.handleInvOnly}
                    cb4={this.singleFreelancer}
                    cb5={this.multipleFreelancers}
                    cb6={this.inviteFreelancer}
                    callback={this.showVisibility}
                    onsite={this.state.jobType === "onsite" ? true : false}
                  />
                </div>
                <Nav back="/newjob/5" next="/newjob/7" />
              </div>
            )}/>
            <Route exact path="/newjob/7" render={() => (
              <div>
                <div style={styles.form}>
                  <Budget
                    paymentType={this.state.paymentType}
                    experienceWanted={this.state.experienceWanted}
                    timeToComplete={this.state.timeToComplete}
                    moreThan30hrs={this.state.moreThan30hrs}
                    cb1={this.handleHourly}
                    cb2={this.handleFixed}
                    cb3={this.handleEntry}
                    cb4={this.handleIntermediate}
                    cb5={this.handleExpert}
                    cb6={this.handleShort}
                    cb7={this.handleMedium}
                    cb8={this.handleLong}
                    cb9={this.moreThan30}
                    cb10={this.lessThan30}
                    cb11={this.unsureOf30}
                    callback={this.showBudget}
                    onsite={this.state.jobType === "onsite" ? true : false}
                  />
                </div>
                <Nav back="/newjob/6" next="/newjob/8" />
              </div>
            )}/>
            <Route exact path="/newjob/8" render={() => (
              <div>
                <Review
                  coworkers={this.state.coworkers}
                  coworkerPermission={this.state.coworkerPermission}
                  coworkerMessage={this.state.coworkerMessage}
                  handleCoworkers={this.handleCoworkers}
                  handleCoworkerPermission={this.coworkerPermission}
                  handleCoworkerMessage={this.coworkerMessage}
                  callback={this.handleReview}
                  name={this.state.name}
                  category={this.state.category}
                  desc={this.state.desc}
                  type={this.state.projectStatus}
                  skills={this.state.skills}
                  questions={this.state.questions}
                  compensation={this.state.paymentType}
                  experience={this.state.experienceWanted}
                  duration={this.state.timeToComplete}
                  commitment={this.state.moreThan30hrs}
                  featured={this.state.featured}
                  handleFeature={this.handleFeature}
                  onsite={this.state.jobType === "onsite" ? true : false}
                />
                <Submit
                  callback={this.showReview}
                  handleSubmit={this.handleSubmit}
                  handleDraft={this.handleDraft}
                  handleTemplate={this.handleTemplate}
                />
                <Nav back="/newjob/7" next="/newjob/10" />
              </div>
            )}/>
            <Route exact path="/newjob/10" render={() => (
              <div>
                <div style={styles.form}>
                  <Deliverables
                    callback={this.showDeliverables}
                  />
                </div>
                <Nav back="/newjob/8" next="/newjob/11" />
              </div>
            )}/>
            <Route exact path="/newjob/11" render={() => (
              <div>
                <div style={styles.form}>
                  <Shipments
                    cb1={this.handleReturnParts}
                    cb2={this.handleDelivery}
                    cb3={this.addPart}
                    cb4={this.removePart}
                    parts={this.state.parts}
                    partsDelivery={this.state.partsDelivery}
                    returnParts={this.state.returnParts}
                    handleText={this.handleText}
                    callback={this.showShipments}
                  />
                </div>
                <Nav back="/newjob/10" next="/newjob/12" />
              </div>
            )}/>
            <Route exact path="/newjob/12" render={() => (
              <div>
                <div style={styles.form}>
                  <Routing
                    inviteTalent={this.state.inviteTalent}
                    published={this.state.published}
                    cb1={this.handlePublish}
                    cb2={this.handleInviteTalent}
                    callback={this.showRouting}
                  />
                </div>
                <Nav back="/newjob/11" next="/newjob/" />
              </div>
            )}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    display: "flex",
    width: "100%",
    margin: 16,
    backgroundColor: "white",
    padding: 18,
    border: "solid",
    borderWidth: 1,
    borderColor: "rgb(90, 90, 90)"
  },
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
  }
};
