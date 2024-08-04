import Container from "@/components/container";
import PageContent from "@/components/page-content/page-content";
import PageHeader from "@/components/page-header/page-header";

export default function Home() {
  return (
    <>
      <PageHeader />
      <PageContent>
        <Container>
          <header>
            <h1>Mountain Huts</h1>
          </header>

          <section>
            <h2>Purpose and Features</h2>
            <p>
              Mountain huts, also known as alpine huts or mountain shelters,
              provide essential shelter and amenities for hikers, climbers, and
              mountaineers in remote mountainous regions. They are strategically
              located along popular trekking routes and climbing paths.
            </p>
          </section>

          <section>
            <h2>Amenities</h2>
            <p>The amenities in mountain huts vary but typically include:</p>
            <ul>
              <li>
                Sleeping quarters with bunk beds or dormitory-style rooms.
              </li>
              <li>
                Cooking facilities or communal dining halls where meals are
                prepared and served.
              </li>
              <li>Sanitary facilities with toilets and sometimes showers.</li>
              <li>Storage areas for gear and equipment.</li>
            </ul>
          </section>

          <section>
            <h2>Operation and Management</h2>
            <p>
              Mountain huts are often managed by local alpine clubs, national
              park services, or private entities. Many operate on a reservation
              basis, especially during peak seasons, to manage visitor flow and
              ensure sustainability.
            </p>
          </section>

          <section>
            <h2>Environmental Considerations</h2>
            <p>
              Mountain huts emphasize environmental sustainability through
              practices such as solar energy use, rainwater collection, and
              waste management protocols to minimize their impact on mountain
              ecosystems.
            </p>
          </section>

          <section>
            <h2>Cultural Significance</h2>
            <p>
              Mountain huts hold cultural significance in many regions,
              reflecting the history and traditions of mountain communities.
              They are places where local knowledge about the mountains is
              shared and preserved.
            </p>
          </section>

          <section>
            <h2>Challenges</h2>
            <p>
              Maintaining mountain huts presents challenges including logistics
              of supplying necessities to remote locations, dealing with extreme
              weather, and managing overcrowding and environmental impact due to
              high visitor numbers.
            </p>
          </section>
        </Container>
      </PageContent>
    </>
  );
}
