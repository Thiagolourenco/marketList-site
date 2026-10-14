import { Icon } from "./ui";

function TabBar({
  home,
  list,
  calendar,
  user,
}: {
  home: string;
  list: string;
  calendar: string;
  user: string;
}) {
  return (
    <div className="tabbar" aria-hidden="true">
      <Icon src={home} />
      <Icon src={list} />
      <Icon src={calendar} />
      <Icon src={user} />
    </div>
  );
}

function Box({ on, mark }: { on?: boolean; mark: string }) {
  return (
    <span className={on ? "box on" : "box"}>
      {on ? <Icon src={mark} /> : null}
    </span>
  );
}

export function HomeScreen() {
  return (
    <div className="phone-home">
      <div className="phone">
        <div className="phone-app">
          <div className="home-screen">
            <div className="greet">
              <div>
                <small>Good Morning,</small>
                <strong>Sarah</strong>
              </div>
              <img className="avatar" src="/assets/avatar.png" alt="" />
            </div>
            <div className="summary">
              <article className="meal-card">
                <img className="meal-photo" src="/assets/meal-today.png" alt="" />
                <p className="kicker">TODAY</p>
                <h3>Roasted Veggie Bowl</h3>
                <p className="meta">25 min • Easy</p>
              </article>
              <article className="plan-card">
                <p>Weekly Plan</p>
                <strong>Day 4</strong>
                <p>of 7 days planned</p>
                <div className="track" aria-hidden="true">
                  <i />
                </div>
              </article>
            </div>
            <p className="section-label">Grocery Lists</p>
            <article className="g-card">
              <h3>This Week&apos;s Shopping</h3>
              <p className="meta">Created Oct 26</p>
              <p className="progress-row">
                <span>Progress</span>
                <span>12/16</span>
              </p>
              <div className="bar" aria-hidden="true">
                <i style={{ width: "75%" }} />
              </div>
            </article>
            <article className="g-card">
              <h3>Thanksgiving Prep</h3>
              <p className="meta">Created Oct 19</p>
              <p className="progress-row">
                <span>Progress</span>
                <span>25/25</span>
              </p>
              <div className="bar done" aria-hidden="true">
                <i style={{ width: "100%" }} />
              </div>
            </article>
            <div className="grow" />
            <TabBar
              home="/assets/house-home.svg"
              list="/assets/list-home.svg"
              calendar="/assets/calendar-home.svg"
              user="/assets/user-home.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const produce = [
  { name: "Avocados", qty: "2 units", done: true },
  { name: "Spinach", qty: "1 bag", done: false },
  { name: "Cherry Tomatoes", qty: "1 pint", done: true },
];
const dairy = [
  { name: "Oat Milk", qty: "1 carton", done: false },
  { name: "Eggs", qty: "1 dozen", done: true },
];

export function ShoppingListScreen({ hero = false }: { hero?: boolean }) {
  const mark = hero ? "/assets/check-white.svg" : "/assets/check-list.svg";
  const tabs = hero
    ? {
        home: "/assets/house.svg",
        list: "/assets/list-checks.svg",
        calendar: "/assets/calendar.svg",
        user: "/assets/user.svg",
      }
    : {
        home: "/assets/house-nav.svg",
        list: "/assets/list-nav.svg",
        calendar: "/assets/calendar-nav.svg",
        user: "/assets/user-nav.svg",
      };

  return (
    <div className={hero ? "phone-list-hero" : "phone-list"}>
      <div className="phone">
        <div className="phone-app">
          <div className="list-screen">
            <p className="list-head">
              <span>‹</span>
              <span>This Week&apos;s Shopping</span>
              <span>···</span>
            </p>
            <div className="cat">
              <p>PRODUCE</p>
              <div className="items">
                {produce.map((item) => (
                  <div className={item.done ? "item done" : "item"} key={item.name}>
                    <Box on={item.done} mark={mark} />
                    <span className="name">{item.name}</span>
                    <span className="qty">{item.qty}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cat">
              <p>DAIRY & EGGS</p>
              <div className="items">
                {dairy.map((item) => (
                  <div className={item.done ? "item done" : "item"} key={item.name}>
                    <Box on={item.done} mark={mark} />
                    <span className="name">{item.name}</span>
                    <span className="qty">{item.qty}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="add-item">＋ Add Item</div>
            <div className="grow" />
            <div className="gen">✧ Generate Meal Plan</div>
            <TabBar {...tabs} />
          </div>
        </div>
      </div>
    </div>
  );
}

const upcoming = [
  { img: "/assets/meal-pesto.png", when: "TUESDAY   ·   25 min", name: "Basil Pesto Pasta", tag: "Vegetarian" },
  { img: "/assets/meal-salmon.png", when: "WEDNESDAY   ·   30 min", name: "Grilled Salmon & Greens", tag: "High Protein" },
  { img: "/assets/meal-stirfry.png", when: "THURSDAY   ·   20 min", name: "Quick Veggie Stir Fry", tag: "Low Carb" },
];

export function WeekPlanScreen() {
  return (
    <div className="phone-week">
      <div className="phone">
        <div className="phone-app">
          <div className="week-screen">
            <div>
              <p className="when">OCT 26 - NOV 01</p>
              <h3>Weekly Plan</h3>
            </div>
            <article className="today-meal">
              <h4>Lemon Herb Roasted Chicken</h4>
              <p>A simple, flavorful roast perfect for a cozy evening. Uses the rosemary and potatoes fro…</p>
              <div className="cook">Start Cooking →</div>
            </article>
            <p className="up">Coming Up</p>
            <div className="upcoming">
              {upcoming.map((meal) => (
                <article className="up-row" key={meal.name}>
                  <img src={meal.img} alt="" />
                  <div>
                    <small>{meal.when}</small>
                    <strong>{meal.name}</strong>
                    <em>{meal.tag}</em>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AiScreen() {
  return (
    <div className="phone-ai">
      <div className="phone">
        <div className="phone-app">
          <div className="ai-screen">
            <Icon src="/assets/chef.svg" />
            <h3>Crafting your perfect week</h3>
            <p>Our AI chef is turning your groceries into a delicious, easy-to-follow meal plan.</p>
            <p className="dots">• • •</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecipeScreen() {
  return (
    <div className="phone-recipe">
      <div className="phone">
        <div className="phone-app">
          <div className="recipe-screen">
            <img className="recipe-photo" src="/assets/recipe-hero.png" alt="" />
            <div className="recipe-body">
              <h3>Lemon Herb Roasted Chicken</h3>
              <p className="facts">◷ 45 min · Beginner · 420 kcal</p>
              <div className="tip">
                <strong>♧ AI Chef Tip</strong>
                <p>
                  Use the leftover rosemary stems from your shopping list to infuse flavor into the potatoes.
                  Place them under the chicken while roasting!
                </p>
              </div>
              <p className="ing-title">Ingredients</p>
              <p className="ing">
                <span>Whole Chicken</span>
                <span>1.5 kg</span>
              </p>
              <p className="ing dim">
                <span>Baby Potatoes</span>
                <span>500 g</span>
              </p>
            </div>
            <div className="cook-bar">
              <div className="cook">Start Cooking Mode ▷</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
