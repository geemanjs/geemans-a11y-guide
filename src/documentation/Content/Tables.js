import React from 'react';

const Tables = () => (
  <div>
    <h2>Tables</h2>
    <p>
      The biggest mistake people make is putting 'tabular data' into a 'non table form' or putting 'non tabular data' into a
      'tabular form'. Tables should be used for data which is repetitive and has a logical link between header and
      data entry.
    </p>
    <p>
      A mistake 'old school' developers make is using tables for layout purposes. This confuses almost all tools and
      results in a terrible experience for users of your site. So use <code>&lt;div&gt;</code>s with css instead.
    </p>
    <h3>Essentials</h3>
    <ul>
      <li>Ensure your table has a <code>&lt;caption&gt;</code> element. This acts as a header and gives many users a
        'shortcut' to reach the
        data. This can be displayed 'off screen' but should not have `display: none` or `visibility: hidden` attached to
        it.
      </li>
      <li>
        Use <code>scope="col"</code> or <code>scope="row"</code> to attach headers per column or header per row
      </li>
      <li>Use <code>colspan="..."</code> or <code>rowSpan="..."</code> to have headers span multiple columns</li>
      <li>If your table is of unusual structure (If you use colspan, or rowspan). A <code>&lt;summary&gt;</code> element should
        be used to describe the structure of the data being displayed.
      </li>
      <li>Ensure your table is marked up with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> section
        appropriately
      </li>
      <li>Use <code>&lt;tr&gt;</code> for rows</li>
      <li>Use <code>&lt;th&gt;</code> for headers</li>
      <li>Use <code>&lt;td&gt;</code> for data cells</li>
    </ul>
    <h4>More info</h4>
    <ul>
      <li><a href="https://www.w3.org/WAI/tutorials/tables/">W3 comprehensive guide</a></li>
      <li><a href="http://www.hongkiat.com/blog/html-table-accessibility/">Good blog post</a></li>
      <li><a href="http://usability.com.au/2005/06/accessible-data-tables-2005/">Old but still relevant</a></li>
    </ul>
    <br />
    <h3>Examples</h3>
    <p className="no-margin">
      The content at <a href="https://www.w3.org/WAI/tutorials/tables/">W3</a> is of extremely high quality and far more
      comprehensive
      than anything I could produce.
    </p>
  </div>
);

export default Tables;
