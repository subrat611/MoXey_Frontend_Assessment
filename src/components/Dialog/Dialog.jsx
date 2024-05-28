/* eslint-disable react/prop-types */
import { FormProvider } from "react-hook-form";
import { addNewUserForm } from "../../utils";
import styles from "./dialog.module.css";
import { useQuery } from "@tanstack/react-query";
import { getCountriesApi } from "../../utils/reactQuery/apis";
import { useEffect, useState } from "react";

const Dialog = ({
  isOpen = false,
  handleDialogClose = () => {},
  methods,
  handleFormSubmit,
}) => {
  const [countries, setCountries] = useState([]);
  const {
    register,
    formState: { errors },
    reset,
  } = methods;

  const { data, isRefetching, isLoading, refetch } = useQuery({
    queryKey: ["options"],
    queryFn: getCountriesApi,
    enabled: false,
  });

  useEffect(() => {
    if (data?.data) {
      setCountries(data.data);
    }
  }, [data]);

  const handleCountrySelectFieldFocus = () => {
    if (countries.length <= 0) {
      refetch();
    }
  };

  const renderFormFields = (formField) => {
    switch (formField.type) {
      case "select":
        return (
          <div className="mb-3">
            <label
              htmlFor={formField.id}
              className={`form-label text-secondary text-uppercase ${
                formField.isRequired && "required_asterisk"
              }`}
            >
              {formField.label}
            </label>
            <select
              id={formField.id}
              className={`form-select ${
                errors[formField.id] ? "is-invalid" : ""
              }`}
              defaultValue=""
              {...register(formField.id)}
            >
              <option selected disabled value="">
                {formField.defaultLabel}
              </option>
              {formField.options &&
                formField.options.map((option, i) => (
                  <option value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
            </select>
            {errors[formField.id] && (
              <p className="invalid-feedback text-capitalize">
                {errors[formField.id].message}
              </p>
            )}
          </div>
        );
      case "input":
        return (
          <>
            {formField.column > 1 && (
              <div className="container-fluid gap-0">
                <div className="row gap-3 mb-3">
                  {formField.fields.map((field, i) => (
                    <div className="col-12 col-md p-0" key={i}>
                      <label
                        htmlFor={field.id}
                        className={`form-label text-secondary text-uppercase ${
                          field.isRequired && "required_asterisk"
                        }`}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.inputType}
                        className={`form-control ${
                          errors[field.id] ? "is-invalid" : ""
                        }`}
                        id={field.id}
                        {...register(field.id)}
                      />

                      {errors[field.id] && (
                        <span className="invalid-feedback text-capitalize">
                          {errors[field.id].message}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {formField.column === 1 && (
              <div className="mb-3">
                <label
                  htmlFor={formField.id}
                  className={`form-label text-secondary text-uppercase ${
                    formField.isRequired && "required_asterisk"
                  }`}
                >
                  {formField.label}
                </label>
                <input
                  type={formField.inputType}
                  className={`form-control ${
                    errors[formField.id] ? "is-invalid" : ""
                  }`}
                  id={formField.id}
                  {...register(formField.id)}
                />

                {errors[formField.id] && (
                  <span className="invalid-feedback text-capitalize">
                    {errors[formField.id].message}
                  </span>
                )}
              </div>
            )}
          </>
        );
      case "input_mob":
        return (
          <div className="mb-3">
            <label
              htmlFor={formField.id}
              className={`form-label text-secondary text-uppercase ${
                formField.isRequired && "required_asterisk"
              }`}
            >
              {formField.label}
            </label>
            <div className="row">
              <div className="col-3 pe-0">
                <select id={formField.id} className="form-select rounded-end-0">
                  <option value="">{formField.selectDefaultValue}</option>
                  <option value="966">+966</option>
                  <option value="971">+971</option>
                  <option value="91">+91</option>
                </select>
              </div>
              <div className="col ps-0">
                <input
                  type={formField.inputType}
                  className={`form-control rounded-start-0 ${
                    errors[formField.id] ? "is-invalid" : ""
                  }`}
                  maxLength={10}
                  id={formField.id}
                  {...register(formField.id)}
                />
              </div>
            </div>
            {errors[formField.id] && (
              <p className="invalid-feedback text-capitalize d-block">
                {errors[formField.id].message}
              </p>
            )}
          </div>
        );
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.dialog_box}>
            {/* ------------ dialog action ------------- */}
            <div className="fw-medium px-3 py-3 border-bottom">
              <i
                className="bi bi-x-lg fs-5 cursor-pointer text-secondary"
                onClick={() => {
                  reset();
                  handleDialogClose(false);
                }}
              ></i>
              <span className="text-capitalize text-secondary fs-5 ms-3">
                add new user
              </span>
            </div>

            {/* ---------------- Dialog content ----------- */}
            <FormProvider {...methods}>
              <form
                className={`mx-3 my-3 ${styles.dialog_form}`}
                onSubmit={methods.handleSubmit(handleFormSubmit)}
                noValidate
              >
                {/* ----------- Country list field ------------ */}
                <div className="mb-3">
                  <label
                    htmlFor="country"
                    className="form-label text-secondary text-uppercase required_asterisk"
                  >
                    country
                  </label>
                  <select
                    id="country"
                    className={`form-select ${
                      errors.country ? "is-invalid" : ""
                    }`}
                    onFocus={handleCountrySelectFieldFocus}
                    {...register("country")}
                    defaultValue=""
                  >
                    {isRefetching || isLoading ? (
                      <option value="" selected disabled>
                        Loading...
                      </option>
                    ) : (
                      <option value="" selected>
                        select country
                      </option>
                    )}

                    {(!isRefetching || !isLoading) && countries.length > 1 && (
                      <>
                        {countries.map((country, i) => (
                          <option
                            value={country.name.common.toLowerCase()}
                            key={i}
                          >
                            {country.name.common}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                  {errors.country && (
                    <p className="invalid-feedback text-capitalize">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                {/* ------------ Dynamic fields -------------- */}
                {addNewUserForm.map((formField, i) => {
                  return <div key={i}>{renderFormFields(formField)}</div>;
                })}

                <div className="d-flex align-item-center gap-2">
                  <button
                    type="submit"
                    className="btn btn-success text-capitalize fw-medium"
                  >
                    <i className="bi bi-plus-lg"></i>
                    <span className="ms-1">add user</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      reset();
                      handleDialogClose(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
