const Footnotes = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          {/* Pricing Disclaimer */}
          <p>
            Prices shown are for informational purposes only and may not be
            reflective of actual list price due to currency, country, and
            regional variant factors. Your actual price will be reflected at
            checkout.
          </p>

          {/* Footnote [1] */}
          <div>
            <p className="font-medium text-blue-600 mb-2">[1]</p>
            <p>
              The Forrester Wave™: Customer Relationship Management Software, Q1
              2025, Kate Leggett, Linda Ivy-Rosser, Faith Born, March 24, 2025.
            </p>
          </div>

          {/* Forrester Disclaimer */}
          <p>
            Forrester does not endorse any company, product, brand, or service
            included in its research publications and does not advise any person
            to select the products or services of any company or brand based on
            the ratings included in such publications. Information is based on
            the best available resources. Opinions reflect judgment at the time
            and are subject to change. For more information, read about
            Forrester's objectivity{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              here
            </a>
            .
          </p>

          {/* Footnote [2] */}
          <div>
            <p className="font-medium text-blue-600 mb-2">[2]</p>
            <p>
              The Total Economic Impact™ of Microsoft Dynamics 365 Customer
              Service, a commissioned study conducted by Forrester Consulting on
              behalf of Microsoft, March 2024. Results are for a composite
              organization based on interviewed customers.
            </p>
          </div>

          {/* Footnote [3] */}
          <div>
            <p className="font-medium text-blue-600 mb-2">[3]</p>
            <p>
              Gartner, Magic Quadrant for the CRM Customer Engagement Center,
              Pri Rathnayake, Drew Kraus, Wynn White, 11 December 2024.
            </p>
          </div>

          {/* Gartner Trademark */}
          <p>
            Gartner is a registered trademark and service mark and Magic
            Quadrant is a registered trademark of Gartner, Inc. and/or its
            affiliates in the U.S. and internationally and are used herein with
            permission. All rights reserved.
          </p>

          {/* Gartner Disclaimer */}
          <p>
            Gartner does not endorse any vendor, product or service depicted in
            its research publications, and does not advise technology users to
            select only those vendors with the highest ratings or other
            designation. Gartner research publications consist of the opinions
            of Gartner's research organization and should not be construed as
            statements of fact. Gartner disclaims all warranties, expressed or
            implied, with respect to this research, including any warranties of
            merchantability or fitness for a particular purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footnotes;
