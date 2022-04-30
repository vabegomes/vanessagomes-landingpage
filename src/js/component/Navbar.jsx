import React from "react";

export const Navbar = () => {
	return (
		<div>
			<nav class="navbar-animalc navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						Animal Crossing
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<img
								src="https://styles.redditmedia.com/t5_2ro2c/styles/communityIcon_zfvfsg5v3rn41.png"
								class="logo"
							/>
							<li class="nav-item justify-content-center d-flex align-items-center">
								<a
									class="nav-link active"
									aria-current="page"
									href="#">
									Personajes
								</a>
							</li>
							<li class="nav-item d-flex justify-content-center d-flex align-items-center">
								<a class="nav-link" href="#">
									Aventuras
								</a>
							</li>
							<li class="nav-item d-flex justify-content-center d-flex align-items-center">
								<a class="nav-link" href="#">
									Actualizaciones
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
