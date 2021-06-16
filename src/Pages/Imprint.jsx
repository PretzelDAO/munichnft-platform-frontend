import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class Imprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderImprint = this.RenderImprint.bind(this);
  }

  RenderImprint() {
    const classes = useStyles();

    return (
      <Container>
        <Typography>
          <div>
            <p>(Impressum)</p>



            <h6>Anschrift:</h6>



            <p>Lehrstuhl für Strategie und Organisation (Prof. Welpe)<br />Technische Universität München<br />Arcisstraße 21<br />80333 München<br />Telefon: +4989289-01</p>



            <hr />



            <h6>Vertretungsberechtigt:</h6>



            <p>Die Technische Universität München wird gesetzlich vertreten durch den Präsidenten Prof. Dr. Thomas F. Hofmann.</p>



            <p>Die Technische Universität München ist gemäß Art. 11 Abs. 1 S. 1 BayHSchG eine Körperschaft des öffentlichen Rechts mit dem Recht der Selbstverwaltung im Rahmen der Gesetze und zugleich gemäß Art. 1 Abs. 2 Satz 1 Nr. 1 BayHSchG staatliche Hochschule (staatliche Einrichtung). Die Technische Universität München nimmt eigene Angelegenheiten als Körperschaft (Körperschaftsangelegenheiten) unter der Rechtsaufsicht der Aufsichtsbehörde, staatliche Angelegenheiten als staatliche Einrichtung wahr (Art. 12 Abs. 1 BayHSchG).</p>



            <hr />



            <h6>Zuständige Aufsichtsbehörde:</h6>



            <p>Bayerisches Staatsministerium für Wissenschaft und Kunst, Salvatorstraße 2, 80333 München.</p>



            <hr />



            <h6>Umsatzsteueridentifikationsnummer:</h6>



            <p>DE811193231 (gemäß § 27a Umsatzsteuergesetz)</p>



            <hr />



            <h6>Inhaltlich verantwortlich:</h6>



            <p>Chair for Strategy and Organization<br />Prof. Dr. Isabel Welpe<br />Technische Universität München</p>



            <p>Arcisstraße 21</p>



            <p>80333 München</p>



            <p>E-Mail: <a href="mailto:welpe@tum.de" data-type="mailto" data-id="mailto:welpe@tum.de">welpe@tum.de</a></p>



            <hr />



            <h6>Nutzungsbedingungen</h6>



            <p>Texte, Bilder, Grafiken sowie die Gestaltung dieser Internetseiten können dem Urheberrecht unterliegen.<br />Nicht urheberrechtlich geschützt sind nach § 5 des Urheberrechtsgesetz (UrhG)</p>



            <ul><li>Gesetze, Verordnungen, amtliche Erlasse und Bekanntmachungen sowie Entscheidungen und amtlich verfasste Leitsätze zu Entscheidungen und</li><li>andere amtliche Werke, die im amtlichen Interesse zur allgemeinen Kenntnisnahme veröffentlicht worden sind, mit der Einschränkung, dass die Bestimmungen über Änderungsverbot und Quellenangabe in § 62 Abs. 1 bis 3 und § 63 Abs. 1 und 2 UrhG entsprechend anzuwenden sind.</li></ul>



            <p>Als Privatperson dürfen Sie urheberrechtlich geschütztes Material zum privaten und sonstigen eigenen Gebrauch im Rahmen des § 53 UrhG verwenden. Eine Vervielfältigung oder Verwendung urheberrechtlich geschützten Materials dieser Seiten oder Teilen davon in anderen elektronischen oder gedruckten Publikationen und deren Veröffentlichung ist nur mit unserer Einwilligung gestattet. Diese Einwilligung erteilen auf Anfrage die für den Inhalt Verantwortlichen. Der Nachdruck und die Auswertung von Pressemitteilungen und Reden sind mit Quellenangabe allgemein gestattet.</p>



            <p>Weiterhin können Texte, Bilder, Grafiken und sonstige Dateien ganz oder teilweise dem Urheberrecht Dritter unterliegen. Auch über das Bestehen möglicher Rechte Dritter geben Ihnen die für den Inhalt Verantwortlichen nähere Auskünfte.</p>



            <h6>Haftungsausschluss</h6>



            <p>Alle auf dieser Internetseite bereitgestellten Informationen haben wir nach bestem Wissen und Gewissen erarbeitet und geprüft. Eine Gewähr für die jederzeitige Aktualität, Richtigkeit, Vollständigkeit und Verfügbarkeit der bereit gestellten Informationen können wir allerdings nicht übernehmen. Ein Vertragsverhältnis mit den Nutzern des Internetangebots kommt nicht zustande.</p>



            <p>Wir haften nicht für Schäden, die durch die Nutzung dieses Internetangebots entstehen. Dieser Haftungsausschluss gilt nicht, soweit die Vorschriften des § 839 BGB (Haftung bei Amtspflichtverletzung) einschlägig sind. Für etwaige Schäden, die beim Aufrufen oder Herunterladen von Daten durch Schadsoftware oder der Installation oder Nutzung von Software verursacht werden, übernehmen wir keine Haftung.</p>



            <p>Falls im Einzelfall erforderlich: Der Haftungsausschluss gilt nicht für Informationen, die in den Anwendungsbereich der Europäischen Dienstleistungsrichtlinie (Richtlinie 2006/123/EG – DLRL) fallen. Für diese Informationen wird die Richtigkeit und Aktualität gewährleistet.</p>



            <h6>Links</h6>



            <p>Von unseren eigenen Inhalten sind Querverweise („Links“) auf die Webseiten anderer Anbieter zu unterscheiden. Durch diese Links ermöglichen wir lediglich den Zugang zur Nutzung fremder Inhalte nach § 8 Telemediengesetz. Bei der erstmaligen Verknüpfung mit diesen Internetangeboten haben wir diese fremden Inhalte daraufhin überprüft, ob durch sie eine mögliche zivilrechtliche oder strafrechtliche Verantwortlichkeit ausgelöst wird. Wir können diese fremden Inhalte aber nicht ständig auf Veränderungen überprüfen und daher auch keine Verantwortung dafür übernehmen. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung von Informationen Dritter entstehen, haftet allein der jeweilige Anbieter der Seite.</p>

          </div>
        </Typography>
      </Container>
    );
  }

  render() {
    return (
      <this.RenderImprint />
    );
  }
}

export default Imprint;