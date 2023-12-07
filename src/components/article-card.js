import Card from 'react-bootstrap/Card';
import './component-styles.css';

function ArticleCard({ title, image, author, date }) {
    return (
        <Card className='article-card shadow'>
            <Card.Img src={image}/>
            <Card.Body>
                <Card.Title className='article-card-title'>{title}</Card.Title>
                <Card.Text className='article-card-author'>{author}</Card.Text>
                <Card.Text className='article-text'>
                    <p>When the Brad Sweet and Kyle Larson-owned High Limit Sprint Car Series purchased the All Star Circuit of Champions for the purpose of expanding its schedule beyond the midweek tour it had been in 2023, it became apparent that there would be a competition for tracks, dates and drivers with the more established World of Outlaws NOS Energy Drink Sprint Car Series. And that new found rivalry has come to the forefront in this form of motorsports all throughout the current off-season.</p>
                    <p>Several drivers have already declared which series they will race with during the 2024 campaign. David Gravel, Giovanni Scelzi and Logan Schuchart are among the stars who will stick with the World of Outlaws. It was already known, of course, that five-time WoO champion Sweet would compete with his own circuit along with his team owner Kasey Kahne. And naturally, Larson will be on hand when his NASCAR schedule will allow.</p>
                    <p>One name that had been the subject of much conjecture was that of highly popular Rico Abreu. Typically, the St. Helena, California native runs a pick-and-choose type of schedule rather than sticking with one particular tour. However, the No. 24 machine was entered in every High Limit event during the tour's inaugural part-time campaign. </p>
                    <p>On Wednesday, Abreu posted a video on X showing himself playing a game of high stakes poker with others at a table adorned with High Limit logos. It was an obvious indicator of the driver's 2024 intentions. </p>
                    <p>Obviously, the presence of Sweet and Larson provided a great deal of star power for High Limit. But the addition of Abreu as a series regular who will have the ability to win each time he unloads, serving as a challenger to Sweet, while at the same time bringing a large contingent of supporters on a nightly basis was a solid addition for the fledgling tour. </p>
                    <p>Although both sides would no doubt love to have him on a full time basis, it was likely more important for High Limit to add Abreu than the World of Outlaws. Even with the splash High Limit is making, the WoO Sprints still have the advantage in terms of name recognition. </p>
                    <p>Not that the High Limit Sprint Car Series necessarily needed legitimacy, but the addition of such a big star who is not a part owner was a key pick up. To put it in NFL draft terms, Abreu's was a big name to take off the board.</p>
                    <p>For more racing content, follow @RichardAllenMSR on X(Twitter) or 'Like' the MotorsportsReport page on Facebook.</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;