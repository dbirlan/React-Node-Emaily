const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>We would love to hear your input !</h3>
                <p>Please answer the following question:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/thanks/${survey.id}/yes">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/thanks/${survey.id}/no">No</a>
            </div>
        </body>
    </html>
  `;
};
