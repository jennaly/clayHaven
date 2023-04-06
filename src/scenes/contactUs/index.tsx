import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Contact from "@/assets/Contact.jpg";
import ActionButton from "@/shared/ActionButton";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: Boolean;
};

const ContactUs = ({ setSelectedPage, isMenuToggled }: Props) => {
  const darkScreen = isMenuToggled ? "brightness-50" : "";
  const inputStyles = `mb-5 w-full rounded-lg bg-dark px-5 py-3 placeholder-light text-light`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div id="contactus" className={`${darkScreen} h-screen bg-clay`}>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.PotteryClasses)}
        className="h-screen"
      >
        <img src={Contact} className="h-1/3 w-full" />
        <div className="flex h-2/3 flex-col justify-between p-10">
          <div>
            <HText>Contact Us</HText>
            <div className="my-5">
              <p>
                Our location in SF's Mission District is located at 2394 Folsom
                Street 94110.
              </p>

              {/* FORM  */}
              <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/jenna@wicot.io"
                className="py-5"
              >
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", { required: true })}
                />

                {errors.name && (
                  <p className="mt-1 text-red-600">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 characters."}
                  </p>
                )}

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-0.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-600">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  rows={4}
                  cols={5}
                  placeholder="MESSAGE"
                  {...register("message", { required: true, maxLength: 100 })}
                />
                {errors.message && (
                  <p className="mt-1 text-red-600">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 characters."}
                  </p>
                )}

                <button
                  type="submit"
                  className={`${inputStyles} hover:text-dakr transtion rounded-lg bg-stone-500 duration-500 hover:bg-stone-600`}
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
