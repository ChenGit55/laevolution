"use client";
import "./enroll-form.css";
import { useState } from "react";
import axios from "axios";
import Modal from "../Modal";

export default function EnrollForm() {
  const [collapsed, setCollapsed] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    program: "",

    name: "",
    gender: "",
    dob: "",
    add_inf: "",

    p_name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",

    emergency_name: "",
    emergency_email: "",
    emergency_phone: "",
  });

  // open/close sucess msg with modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // fill the datas
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //send informations to the email
  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = axios({
        method: "post",
        url: "api/enroll",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

      // reset fileds
      setFormData({
        program: "",
        name: "",
        gender: "",
        dob: "",
        add_inf: "",
        p_name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        email: "",
        phone: "",

        emergency_name: "",
        emergency_email: "",
        emergency_phone: "",
      });
      setIsChecked(!isChecked);
      openModal();
    } catch (error) {
      console.error("Fail to send email :", error);
    }
  };

  // colapse link
  const toggleCollapse = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setCollapsed(!collapsed);
  };

  // required checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form className="enroll-form max-w-md mx-auto p-5" onSubmit={sendEmail}>
      <div className="program-select">
        <div className="form-field">
          <select
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            name="program"
            id="program"
            value={formData.program}
            onChange={handleChange}
          >
            <option value="--">--</option>
            <option value="Soccer">Soccer</option>
            <option value="Beach Soccer">Beach Soccer</option>
            <option value="Futsal">Futsal</option>
            <option value="Private Training">Private Training</option>
            <option value="Evolution Expirience">Evolution Expirience</option>
          </select>
        </div>
      </div>

      <div className="children-information">
        <h5>Child information</h5>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Gender
            </span>
          </label>
          <div className="form-field">
            <div className="flex items-center me-4">
              <input
                type="radio"
                id="inline-radio"
                name="gender"
                value="boy"
                checked={formData.gender === "boy"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                required
              />
              <label
                htmlFor="inline-radio"
                className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Boy
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                id="inline-2-radio"
                name="gender"
                value="girl"
                onChange={handleChange}
                checked={formData.gender === "girl"}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                required
              />
              <label
                htmlFor="inline-2-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Girl
              </label>
            </div>
          </div>
        </div>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Date of Birth
            </span>
          </label>
          <div className="relative max-w-sm">
            <input
              id="default-datepicker"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 px-5 py-2 text-gray-500 border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </div>
        </div>
        <div className="form-field">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Additional Information
            </span>
          </label>
          <textarea
            name="add_inf"
            value={formData.add_inf}
            onChange={handleChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Relevant information here..."
          />
        </div>
      </div>
      <div className="parent-information">
        <h5>Parent information</h5>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              type="text"
              name="p_name"
              value={formData.p_name}
              onChange={handleChange}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Full Name"
            />
          </label>
        </div>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Address
            </span>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Address"
            />
          </label>
        </div>
        <div className="flex justify-between">
          <div className="form-field">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                City
              </span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="City"
            />
          </div>
          <div className="form-field">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                State
              </span>
            </label>
            <select
              value={formData.state}
              onChange={handleChange}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              name="state"
              id="states"
            >
              <option value="">--</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </select>
          </div>
        </div>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Zip
            </span>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Zip"
            />
          </label>
        </div>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            // onChange={handleChange}
            type="email"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
        </div>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Phone
            </span>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="123-456-789"
            />
          </label>
        </div>
      </div>
      <div className="emergency-contact">
        <h5>Emergency Contact</h5>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              type="text"
              name="emergency_name"
              value={formData.emergency_name}
              onChange={handleChange}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Full Name"
            />
          </label>
        </div>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
          </label>
          <input
            type="email"
            name="emergency_email"
            value={formData.emergency_email}
            onChange={handleChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
        </div>
        <div className="form-field">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Phone
            </span>
            <input
              type="text"
              name="emergency_phone"
              value={formData.emergency_phone}
              onChange={handleChange}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="123-456-789"
            />
          </label>
        </div>
      </div>
      <div className="form-field">
        <div
          className={`collapse-content ${collapsed ? "collapsed" : "expanded"}`}
        >
          <p>
            ENROLLMENT AGREEMENT I, the parent/guardian, certify that I am of
            lawful age. I hereby agree to allow my child, the Participant, to
            participate in the activities described below provided by Los
            Angeles Soccer Evolution. In consideration of the above statement,
            employees, agents, assigns, legal representatives and successors
            from all manner of actions, causes of action, debts, accounts,
            bonds, contracts, claims and demands for or by reason of any injury
            to person or property, including injury resulting in the death of
            the Participant, which has been or may sustained as a consequence of
            the Participant's participation in the activity described below, and
            not withstanding that such damage, loss or injury may have been
            caused solely or partly by the negligence of the Activity Provider.
            The Parent/Guardian understands that the Participant would not be
            permitted to participate in the activity described below unless the
            Parent/Guardian signed this Agreement. The Participant will
            participate in the following activities: Youth Soccer Program:
            Soccer training (physical, technical, conditioning, agility and
            coordination). Individual training, soccer camps and clinics. I
            understand and agree that Los Angeles Soccer Evolution has the right
            to terminate enrollment of any child from Los Angeles Soccer
            Evolution if it, in its sole discretion, determines that the
            continued attendance of the child in the program is not in the best
            interest of the child or the program. I agree to supervise or
            designate a responsible adult to supervise my child prior to and
            immediately after his/her Los Angeles Soccer Evolution activities.
            If my child is under the age of 3, I understand that I must remain
            in the immediate vicinity of the class at all times. I understand
            and agree that in case of an allergic reaction, I am solely
            responsible for attending to and treating my child. Los Angeles
            Soccer Evolution coaches are not authorized to administer medication
            or EpiPens. The Parents/Guardian acknowledges that the Participant
            does not have any physical limitations, medical aliments, physical
            or mental disabilities that wold limit or prevent the Participant
            from participating in the above mentioned activity. If required, the
            Participant will obtain a medical examination and clearance. The
            Parent/Guardian hereby acknowledges and agrees that the
            Parent/Guardian has carefully read this Agreement, that the
            Parent/Guardian fully understands the same, and that the
            Parent/Guardian is freely and voluntarily executing the same. The
            Parent/Guardian understands that by signing this Agreement, the
            Parent/Guardian agrees to be forever prevented from suing or
            otherwise claiming against the Activity Provider for any property
            loss or personal injury that the Participant may sustain while
            participating in or preparing for the above noted activity. The
            Parent/Guardian has been given the opportunity and has been
            encouraged to seek independent legal advice prior to signing this
            Agreement. In the event of inclement weather, classes may be
            canceled, in case the weather changes during the classes, camp or
            any activity conducted by Los Angeles Soccer Evolution will be
            canceled. All students will be asked to leave the field to the
            designated shelter area. Classes will be postpone to further date
            after the session is over. This Agreement contains the entire
            agreement between the parties to this Agreement and the terms of
            this Agreement are contractual and not a mere recital. This
            Agreement will be construed in accordance with and governed by the
            laws of the State of California. PAYMENT AND REFUND No refund will
            be given unless a written notice is provided 5 business days before
            the first day of activities begins. SOCIAL MEDIA I, on behalf of my
            participating child consent that the photographs, artwork, audio,
            video, or writing that is documented may be used by LA Soccer
            Evolution, its assigns or successors, in whatever way they desire,
            including television, CD's, Social Media, web page, publication, and
            any other form for the storage, retrieval and reproduction of
            information, images; furthermore, I hereby consent that such
            information, photographs, videos, and the plates and/or tapes from
            which they are made shall be their property, and they shall have the
            right to sell, duplicate reproduce and make other uses of such
            information, photographs, videos, recordings, and plates as they may
            desire free and clear of any claim whatsoever on my part.
          </p>
        </div>
      </div>
      <div className="form-field flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
            onClick={toggleCollapse}
          >
            terms and conditions.(
            {collapsed ? "show" : "hide"})
          </a>{" "}
        </label>
      </div>

      <div className="form-button">
        <button
          type="submit"
          className="my-btn py-2 px-5 text-sm font-medium text-center rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300"
          disabled={!isChecked}
        >
          Enroll
        </button>
      </div>

      <div className="form-field"></div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        message="Welcome to the Evolution team, we will contact you soon."
      />
    </form>
  );
}
