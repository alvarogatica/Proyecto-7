import { useState, useContext, useEffect } from "react";
import UserContext from "../../contexts/user/UserContext";

export default function Profile() {
  const userCtx = useContext(UserContext);
  const { updateUser } = userCtx;
  const { username, email, country, address, phone, zipcode } = userCtx.currentUser;

  const [userForm, setUserForm] = useState({
    username: "",
    country: "",
    address: "",
    phone: "",
    zipcode: "",
  });

  useEffect(() => {
    const updateData = () => {
      setUserForm({
        ...userForm,
        username,
        country,
        address,
        phone,
        zipcode,
      });
    };

    updateData();
  }, []);

  const handleChange = async (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = async (event) => {
    event.preventDefault();
    await updateUser(userForm);
  };

  return (
    <>
      <div className="mx-auto py-4 px-8">
        <div className="space-y-16 ">
          <section>
            <form onSubmit={sendData}>
              <div className="">
                <div className="px-4">
                  <div>
                    <h2 className="text-3xl font-bold mt-8">Tu perfil</h2>
                    <p className="mt-2 mb-8 text-sm">
                      Edita las áreas de tu perfil que desees. 😉
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-4 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label className="form-label">Tu nombre de usuario</label>
                      <input
                        type="text"
                        name="username"
                        value={userForm.username}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ej: maria123"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label className="form-label">Tu email</label>
                      <input
                        disabled
                        type="email"
                        name="email"
                        value={email}
                        className="form-input"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label className="form-label">Tu país</label>
                      <input
                        type="text"
                        name="country"
                        value={userForm.country}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ej: Chile"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-1">
                      <label className="form-label">
                        <span>Tu número de teléfono</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={userForm.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ej: +56 9 1234 5678"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-1">
                      <label className="form-label">
                        <span>Código postal</span>
                      </label>
                      <input
                        type="text"
                        name="zipcode"
                        value={userForm.zipcode}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ej: 1234567"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-3">
                      <label className="form-label">Dirección</label>
                      <input
                        type="text"
                        name="address"
                        value={userForm.address}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ej: Calle Falsa 123"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 px-4 py-3">
                  <button type="submit" className="form-button w-auto">
                    Guardar cambios
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
