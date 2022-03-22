<template>
  <div>
    <h1>Trending stocks</h1>
    <div class="container">
      <section class="mx-auto my-5" style="max-width: 23rem">
        <div class="card chart-card">
          <div class="card-body pb-0">
            <h5 class="card-title font-weight-bold">Alie Corporation</h5>
            <p class="card-text mb-4">NYSE: AZHC • Oct 16, 1:45PM</p>
            <div class="d-flex justify-content-between">
              <p class="display-4 align-self-end">887.32</p>
              <p class="align-self-end pb-2">887.02 (.03%)</p>
            </div>
          </div>
          <ul class="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
            <li class="nav-item ms-0" role="presentation">
              <a
                class="nav-link active"
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                href="#ex1-tabs-1"
                role="tab"
                aria-controls="ex1-tabs-1"
                aria-selected="true"
                >Profile</a
              >
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                href="#ex1-tabs-2"
                role="tab"
                aria-controls="ex1-tabs-2"
                aria-selected="true"
                >Follow</a
              >
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                href="#ex1-tabs-3"
                role="tab"
                aria-controls="ex1-tabs-3"
                aria-selected="true"
                >Contact</a
              >
            </li>
          </ul>
          <div class="card-body">
            <div class="tab-content" id="ex1-content">
              <div
                class="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tabs-1"
              >
                <canvas id="line-chart" height="250px"></canvas>
              </div>
              <div
                class="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tabs-2"
              >
                <p align="justify" class="font-small text-muted mx-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam
                  minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam
                  aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
                </p>
                <p align="justify" class="font-small text-muted mx-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam
                  minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam
                  aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="ex1-tabs-3"
                role="tabpanel"
                aria-labelledby="ex1-tabs-3"
              >
                <img
                  class="img-fluid z-depth-1 rounded mb-3"
                  alt="sample image"
                  src="https://mdbootstrap.com/img/Photos/Others/intro1.jpg"
                />
                <p align="justify" class="font-small text-muted mx-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam
                  minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam
                  aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima at ipsum
                  sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
