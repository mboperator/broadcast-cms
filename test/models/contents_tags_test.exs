defmodule BroadcastLove.ContentsTagsTest do
  use BroadcastLove.ModelCase

  alias BroadcastLove.ContentsTags

  @valid_attrs %{}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = ContentsTags.changeset(%ContentsTags{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = ContentsTags.changeset(%ContentsTags{}, @invalid_attrs)
    refute changeset.valid?
  end
end
