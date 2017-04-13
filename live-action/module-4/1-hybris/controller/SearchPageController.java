@Controller
@RequestMapping("/search")
public class SearchPageController extends AbstractSearchPageController
{
	@RequestMapping(method = RequestMethod.GET, params = "q")
	public String refineSearch(@RequestParam("q") final String searchQuery
			final Model model) throws CMSItemNotFoundException
	{
		storeCmsPageInModel(model, getContentPageForLabelOrId("search"));
		// do something here
		return getViewForPage(model);
	}

	@ResponseBody
	@RequestMapping(value = "/results", method = RequestMethod.GET)
	public String ajaxResults(@RequestParam("q") final String searchQuery) throws CMSItemNotFoundException
	{
		// do something here
		return "pages/storeFinder/storeFinderSearchPage";
	}
}
