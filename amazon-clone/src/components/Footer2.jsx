import React from 'react'
import "../components-css/Footer2.css";

function Footer2() {
  return (
    <div className='footer2'>
      <div className="footer2-upper">
        <table className='footer2-table'>
          <tbody>
            <tr className='footer2-row1'>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    AbeBooks <br />
                    <span>Books, art</span> <br />
                    <span>& collectibles</span>
                </a>
              </td>
              <td className='space'></td>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    Amazon Web Services <br />
                    <span>Scalable Cloud</span> <br />
                    <span>Computing Services</span>
                </a>
              </td>
              <td className='space'></td>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    Audible <br />
                    <span>Download</span> <br />
                    <span>Audio Books</span>
                </a>
              </td>
              <td className='space'></td>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    DPReview <br />
                    <span>Digital</span> <br />
                    <span>Photography</span>
                </a>
              </td>
              <td className='space'></td>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    IMDb <br />
                    <span>Movies, TV</span> <br />
                    <span>& Celebrities</span>
                </a>
              </td>
            </tr>

            <tr className='footer2-row2'>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    Shopbop <br />
                    <span>Designer</span> <br />
                    <span>Fashion Brands</span>
                </a>
              </td>
              <td className='space'></td>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    Amazon Business <br />
                    <span>Everything For</span> <br />
                    <span>Your Business</span>
                </a>
              </td>
              <td className='space'></td>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    Prime Now <br />
                    <span>2 Hour Delivery</span> <br />
                    <span>on Everyday Items</span>
                </a>
              </td>
              <td className='space'></td>
              <td className='footer2-link'>
                <a href="/" className='column-data'>
                    Amazon Prime Music <br />
                    <span>90 million songs, ad-free</span> <br />
                    <span>Over 15 million podcast episodes</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer2-lower">
        {/* <ul>
          <li>
            <a href="/">Conditions of Use & Sale</a>
          </li>
          <li>
            <a href="/">Privacy Notice</a>
          </li>
          <li>
            <a href="/">Interest-Based Ads</a>
          </li>
        </ul> */}
        <a href="/">Conditions of Use & Sale</a>
        <a href="/">Privacy Notice</a>
        <a href="/">Interest-Based Ads</a>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>

    </div>
  )
}

export default Footer2;
