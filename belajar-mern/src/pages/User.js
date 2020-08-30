import React, { useState, useEffect } from "react";
import { API_URL } from "../config/confg";
import axios from "axios";

function User() {
	const [data, setData] = useState({});
	const [alert, setAlert] = useState(false);

	const addUser = (e) => {
		e.preventDefault();
		axios
			.post(`${API_URL}/user`, data)
			.then((response) => {
				console.log(response.data);
				setAlert(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-6">
				{alert ? <div className="alert alert-success">Data berhasil ditambahkan</div> : null}
				<form action="" onSubmit={(e) => addUser(e)}>
					<div className="card">
						<div className="card-body">
							<div className="form-group">
								<label htmlFor="">Full Name</label>
								<input type="text" className="form-control" name="fullname" required onChange={(e) => setData({ ...data, fullname: e.target.value })} />
							</div>
							<div className="form-group">
								<label htmlFor="">Email</label>
								<input type="text" className="form-control" name="email" required onChange={(e) => setData({ ...data, email: e.target.value })} />
							</div>
							<div className="form-group">
								<label htmlFor="">Phone</label>
								<input type="text" className="form-control" name="Phone" required onChange={(e) => setData({ ...data, phone: e.target.value })} />
							</div>
							<div className="form-group">
								<label htmlFor=""> Address</label>
								<textarea name="address" id="" className="form-control" required onChange={(e) => setData({ ...data, address: e.target.value })}></textarea>
							</div>
						</div>

						<div className="card-footer text-right">
							<button className="btn btn-md btn-primary" type="submit">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default User;
