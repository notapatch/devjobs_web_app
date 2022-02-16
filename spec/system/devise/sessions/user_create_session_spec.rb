require "rails_helper"

RSpec.describe "Devise::Sessions::CustomerCreateSession", type: :system do
  it "signs into the app with email", js: true do
    user = create(:user, username: "X")
    visit new_user_session_path

    fill_in "Email", with: user.email
    fill_in "Password", with: "password"
    click_on "Sign in"

    expect(page).to have_text "Signed in successfully."

    click_link "X"

    expect(page).to have_text "Signed out successfully."
  end

  it "displays error if sign in fails" do
    create(:user)
    visit new_user_session_path

    click_on "Sign in"

    expect(page).to have_text "Invalid Email or password."
  end
end
