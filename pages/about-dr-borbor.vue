<template>
  <div>
    <Header :optionsPage="optionsPage" />
    <section class="bg-gray">
      <div class="container">
        <div class="row g-5 justify-content-center">
          <div class="col-md-4">
            <ImageResponsive
              url="https://family-medicine-headquarters.s3-us-west-1.amazonaws.com/home2/wzebziteclient3/administration.website-client-3.com/wp-content/uploads/2022/08/FMHQ-2.jpg"
            />
          </div>
          <div class="col-md-7">
            <h1 class="mb-0"><strong>Meet Shariar Borbor, M.D.</strong></h1>
            <h6>Family Medicine Specialist</h6>

            <p>
              Our motto and common purpose at the Family Medical Headquarters:
              <br />
              To better every life we touch through the way we care.
            </p>
            <p>
              For more than 13 years, Dr. Borbor has been serving Azusa and
              surrounding communities. He knows the neighborhood and the needs
              we have here. His goal at HMHQ is to treat patients of all ages
              with a focus on preventive care and patient education.
            </p>
            <p>
              Dr. Borbor uses evidence-based medicine to diagnose and treat a
              wide range of acute and chronic conditions. His devotion to
              providing compassionate care and building strong interpersonal
              relationships fuels his passion to build a stronger, healthier
              community.
            </p>
            <p>
              In his free time, Dr. Borbor enjoys traveling, playing basketball,
              exploring the great outdoors, and spending time with family and
              friends. Through his partnership with area professionals, Dr.
              Borbor has access to the best hospitals, specialists, labs,
              radiology facilities, and support programs available. As a
              dedicated champion of health, he represents the highest standards
              of accessible and compassionate healthcare.
            </p>

            <p><strong>Education and Accreditation</strong></p>
            <ul>
              <li>University of California, Santa Barbara with honors</li>
              <li>Ross University School of Medicine, Dan’s Honor Roll</li>
              <li>
                Internship and Residency University of California, Davis Family
                Medicine Network – Davis, CA
              </li>
              <li>Family Practice Residency. San Joaquin General Hospital</li>
            </ul>

            <p><strong>Memberships and Certifications</strong></p>
            <ul>
              <li>American Academy of Family Physicians</li>
              <li>California Academy of Family Physicians</li>
              <li>American Medical Association</li>
              <li>Certified in ACLS, ALSO, NALS and PALS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer
      :page="page.call_to_action"
      :optionsPage="optionsPage"
      :menuQuickLinks="menuQuickLinks"
      :menuServices="menuServices"
    />
  </div>
</template>

<script>
import Api from "~/api/index";
import Header from "~/components/Header";
import Heroe from "~/components/Heroe";
import ImageLeftContentRightAboutUs from "~/components/ImageLeftContentRightAboutUs";
import OnlyContent from "~/components/OnlyContent";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Heroe,
    ImageLeftContentRightAboutUs,
    OnlyContent,
    Footer,
  },

  async asyncData({ error, params }) {
    const [page, menuQuickLinks, menuServices, optionsPage] = await Promise.all(
      [
        Api.ApiGetPage(11),
        Api.ApiGetMenu(3),
        Api.ApiGetMenu(2),
        Api.ApiGetOption(),
      ]
    );
    return {
      seo: page.data,
      page: page.data.acf,
      menuQuickLinks: menuQuickLinks.data.items,
      menuServices: menuServices.data.items,
      optionsPage: optionsPage.data.acf,
    };
  },

  head() {
    return {
      title:
        "Shariar Borbor, M.D. | Primary Care Services | Family Medicine Headquarters, Azuza, CA",
      meta: [
        {
          name: "author",
          content: "Damian Tardencilla - damian@tardencilla.com",
        },
        {
          hid: "description",
          name: "description",
          property: "og:description",
          content:
            "Dr. Shariar Borbor of the Family Medicine Headquarters (La Clinica Central) of Azuza, CA wants to be your neighborhood primary care group.",
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content:
            "Dr. Shariar Borbor of the Family Medicine Headquarters (La Clinica Central) of Azuza, CA wants to be your neighborhood primary care group.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Shariar Borbor, M.D. | Primary Care Services | Family Medicine Headquarters, Azuza, CA",
        },
        {
          property: "og:image",
          content:
            "https://family-medicine-headquarters.s3-us-west-1.amazonaws.com/uploads/2020/10/dr.png",
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content:
            "Shariar Borbor, M.D. | Primary Care Services | Family Medicine Headquarters, Azuza, CA",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Dr. Shariar Borbor of the Family Medicine Headquarters (La Clinica Central) of Azuza, CA wants to be your neighborhood primary care group.",
        },
        {
          name: "twitter:image",
          content:
            "https://family-medicine-headquarters.s3-us-west-1.amazonaws.com/uploads/2020/10/dr.png",
        },
      ],
    };
  },
};
</script>
